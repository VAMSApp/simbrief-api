import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { SimBriefApiConfig, RequestOptions, ApiResponse, ApiError, UserFlightPlan, Airframes } from './types';
import { mergeConfig } from './config';
// Export all types
export * from './types';

// Export configuration utilities
export { getConfigFromEnv, mergeConfig } from './config';

/**
 * HTTP API Client for making type-safe API requests
 */
export default class SimBriefApi {
  private axios: AxiosInstance;
  private readonly config: SimBriefApiConfig;
  /**
   * Create a new API client instance
   * @param config - Configuration options for the API client
   */
  constructor(config?: SimBriefApiConfig) {
    const mergedConfig = mergeConfig(config);
    this.config = mergedConfig;

    this.axios = Axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: this.config.headers,
    });
  }

  /**
   * Make a generic HTTP request
   * @param method - HTTP method
   * @param url - Request URL
   * @param options - Request options
   * @returns Promise resolving to the API response
   */
  private async request<T = any>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    try {
      const axiosConfig: AxiosRequestConfig = {
        method,
        url,
        params: options?.params,
        data: options?.data,
        headers: options?.headers,
        timeout: options?.timeout,
      };

      const response: AxiosResponse<T> = await this.axios.request(axiosConfig);

      return {
        data: response.data,
        status: response.status,
        headers: response.headers as Record<string, string>,
        originalResponse: response,
      };
    } catch (error: any) {
      if (Axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;
        const headers = error.response?.headers as Record<string, string> | undefined;
        const message = error.message || 'API request failed';

        throw new ApiError(message, status, data, headers, error);
      }

      // Re-throw non-axios errors
      throw error;
    }
  }

  /**
   * Make a GET request
   * @param url - Request URL (relative to baseURL if configured)
   * @param options - Optional request options
   * @returns Promise resolving to the API response
   */
  private async get<T = any>(url: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>('GET', url, options);
  }

  public async getAirframes(): Promise<ApiResponse<Airframes>> {
    const response = await this.get<Airframes>('/inputs.airframes.json');

    return response;
  }

  public async getUserFlightPlan(username: string): Promise<ApiResponse<UserFlightPlan>> {
    const response = await this.get<UserFlightPlan>(`/xml.fetcher.php?json=1&username=${username}`);

    return response;
  }
}
