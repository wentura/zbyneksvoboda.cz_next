/**
 * Rate limiting s podporou Upstash Redis (produkce) a fallback na in-memory (vývoj)
 * 
 * Pro produkci:
 * 1. Vytvořit účet na https://upstash.com
 * 2. Vytvořit Redis databázi
 * 3. Přidat do .env.local:
 *    UPSTASH_REDIS_REST_URL=your_url
 *    UPSTASH_REDIS_REST_TOKEN=your_token
 * 4. Odkomentovat Upstash implementaci níže
 */

// * Fallback in-memory rate limiter.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minut
const RATE_LIMIT_MAX = 5;
const ipHits = new Map();

// * In-memory kontrola limitu na IP.
function isRateLimitedInMemory(ip) {
  const now = Date.now();
  const entry = ipHits.get(ip) || { count: 0, start: now };
  // * Pokud okno vypršelo, resetuj počítadlo.
  if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
    ipHits.set(ip, { count: 1, start: now });
    return { limited: false, remaining: RATE_LIMIT_MAX - 1, reset: now + RATE_LIMIT_WINDOW_MS };
  }
  // * Pokud je limit překročen, vrať limited.
  if (entry.count >= RATE_LIMIT_MAX) {
    return { limited: true, remaining: 0, reset: entry.start + RATE_LIMIT_WINDOW_MS };
  }
  // * Inkrement počítadla a uložení.
  entry.count += 1;
  ipHits.set(ip, entry);
  return { limited: false, remaining: RATE_LIMIT_MAX - entry.count, reset: entry.start + RATE_LIMIT_WINDOW_MS };
}

/**
 * Rate limiting s Upstash Redis (produkce)
 * Odkomentovat po nastavení Upstash
 */
/*
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
  prefix: "@upstash/ratelimit/contact",
});
*/

/**
 * Zkontroluje rate limit pro danou IP adresu
 * @param {string} ip - IP adresa klienta
 * @returns {Promise<{limited: boolean, remaining: number, reset: number}>}
 */
export async function checkRateLimit(ip) {
  // * Pokud je Upstash nastaven, použít ho.
  const useUpstash = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;
  
  // * Větev s Upstash (aktuálně fallback).
  if (useUpstash) {
    // * Odkomentovat po instalaci @upstash/ratelimit a @upstash/redis.
    /*
    try {
      const { success, limit, reset, remaining } = await ratelimit.limit(ip);
      return {
        limited: !success,
        remaining: remaining || 0,
        reset: reset || Date.now() + RATE_LIMIT_WINDOW_MS,
        limit: limit || RATE_LIMIT_MAX
      };
    } catch (error) {
      // * Fallback na in-memory při chybě Upstash.
      console.error('Upstash rate limit error, falling back to in-memory:', error);
      return isRateLimitedInMemory(ip);
    }
    */
    // * Prozatím fallback dokud není Upstash nastaven.
    return isRateLimitedInMemory(ip);
  }
  
  // * Fallback na in-memory pro vývoj nebo pokud není Upstash nastaven.
  return isRateLimitedInMemory(ip);
}

// * Exporty pro konfiguraci rate limitu.
export const RATE_LIMIT_MAX_REQUESTS = RATE_LIMIT_MAX;
export const RATE_LIMIT_WINDOW_SECONDS = Math.ceil(RATE_LIMIT_WINDOW_MS / 1000);
