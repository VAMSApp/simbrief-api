import { AxiosRequestConfig, AxiosResponse } from 'axios';
export * from './Airframe';
export * from './UserFlightPlan';
export * from './SimBriefApiConfig';

/**
 * Request-specific options that can override default configuration
 */
export type RequestOptions = {
  /** HTTP method (if not specified, will be determined by the method called) */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  /** Query parameters to append to the URL */
  params?: Record<string, any>;
  /** Request body data */
  data?: any;
  /** Additional headers for this specific request */
  headers?: Record<string, string>;
  /** Request timeout override */
  timeout?: number;
}

/**
 * Generic API response wrapper
 */
export type ApiResponse<T = any> = {
  /** Response data */
  data: T;
  /** HTTP status code */
  status: number;
  /** Response headers */
  headers: Record<string, string>;
  /** Original axios response */
  originalResponse?: AxiosResponse<T>;
}

/**
 * API error class for handling API failures
 */
export class ApiError extends Error {
  /** HTTP status code */
  status?: number;
  /** Response data from the error */
  data?: any;
  /** Response headers */
  headers?: Record<string, string>;
  /** Original axios error */
  originalError?: any;

  constructor(
    message: string,
    status?: number,
    data?: any,
    headers?: Record<string, string>,
    originalError?: any
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
    this.headers = headers;
    this.originalError = originalError;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}
