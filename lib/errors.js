/**
 * Custom error třídy pro lepší error handling
 */

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

export class ExternalServiceError extends Error {
  constructor(message, service) {
    super(message);
    this.name = "ExternalServiceError";
    this.statusCode = 502;
    this.service = service;
  }
}

export class ConfigurationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConfigurationError";
    this.statusCode = 500;
  }
}
