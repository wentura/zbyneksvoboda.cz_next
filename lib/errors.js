/**
 * Custom error třídy pro lepší error handling
 */

// * Error pro validační chyby.
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

// * Error pro překročený rate limit.
export class RateLimitError extends Error {
  constructor(message, retryAfter = null) {
    super(message);
    this.name = 'RateLimitError';
    this.statusCode = 429;
    this.retryAfter = retryAfter;
  }
}

// * Error pro chyby externích služeb.
export class ExternalServiceError extends Error {
  constructor(message, service) {
    super(message);
    this.name = 'ExternalServiceError';
    this.statusCode = 502;
    this.service = service;
  }
}

// * Error pro chybějící konfiguraci.
export class ConfigurationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConfigurationError';
    this.statusCode = 500;
  }
}
