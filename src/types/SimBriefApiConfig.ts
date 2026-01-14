/**
 * Configuration options for the API client
 */
export type SimBriefApiConfig = {
    /** Base URL for all API requests */
    baseURL?: string;
    /** Request timeout in milliseconds */
    timeout?: number;
    /** Default headers to include with all requests */
    headers?: Record<string, string>;
  }