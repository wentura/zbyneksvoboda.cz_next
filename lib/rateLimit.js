/**
 * Rate limiting: Upstash Redis v produkci, in-memory fallback pro lokální vývoj.
 *
 * Produkce (Vercel):
 *   UPSTASH_REDIS_REST_URL=
 *   UPSTASH_REDIS_REST_TOKEN=
 */

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map();

let upstashRatelimit = null;

function getUpstashRatelimit() {
  if (upstashRatelimit) return upstashRatelimit;
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return null;
  }
  upstashRatelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX, "10 m"),
    analytics: true,
    prefix: "@upstash/ratelimit/contact",
  });
  return upstashRatelimit;
}

function isRateLimitedInMemory(ip) {
  const now = Date.now();
  const entry = ipHits.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
    ipHits.set(ip, { count: 1, start: now });
    return {
      limited: false,
      remaining: RATE_LIMIT_MAX - 1,
      reset: now + RATE_LIMIT_WINDOW_MS,
      limit: RATE_LIMIT_MAX,
    };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return {
      limited: true,
      remaining: 0,
      reset: entry.start + RATE_LIMIT_WINDOW_MS,
      limit: RATE_LIMIT_MAX,
    };
  }
  entry.count += 1;
  ipHits.set(ip, entry);
  return {
    limited: false,
    remaining: RATE_LIMIT_MAX - entry.count,
    reset: entry.start + RATE_LIMIT_WINDOW_MS,
    limit: RATE_LIMIT_MAX,
  };
}

/**
 * @param {string} ip
 * @returns {Promise<{limited: boolean, remaining: number, reset: number, limit: number}>}
 */
export async function checkRateLimit(ip) {
  const ratelimit = getUpstashRatelimit();

  if (ratelimit) {
    try {
      const { success, limit, reset, remaining } = await ratelimit.limit(
        ip || "unknown",
      );
      return {
        limited: !success,
        remaining: remaining ?? 0,
        reset: reset || Date.now() + RATE_LIMIT_WINDOW_MS,
        limit: limit || RATE_LIMIT_MAX,
      };
    } catch (error) {
      console.error(
        "Upstash rate limit error, falling back to in-memory:",
        error,
      );
      return isRateLimitedInMemory(ip || "unknown");
    }
  }

  return isRateLimitedInMemory(ip || "unknown");
}

export const RATE_LIMIT_MAX_REQUESTS = RATE_LIMIT_MAX;
export const RATE_LIMIT_WINDOW_SECONDS = Math.ceil(RATE_LIMIT_WINDOW_MS / 1000);
