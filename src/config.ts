import dotenv from 'dotenv';
import { SimBriefApiConfig } from './types';

// Load environment variables from .env file
dotenv.config();

/**
 * Default configuration values
 */
const DEFAULT_CONFIG: Partial<SimBriefApiConfig> = {
  timeout: 30000, // 30 seconds
};

/**
 * Get configuration from environment variables
 */
export function getConfigFromEnv(): Partial<SimBriefApiConfig> {
  const config: Partial<SimBriefApiConfig> = {
    baseURL: process.env.API_BASE_URL || 'https://www.simbrief.com/api',
  };

  if (process.env.API_TIMEOUT) {
    const timeout = parseInt(process.env.API_TIMEOUT, 10);
    if (!isNaN(timeout)) {
      config.timeout = timeout;
    }
  }

  // Parse additional headers from environment if needed
  // Example: API_HEADERS='{"Authorization": "Bearer token"}'
  if (process.env.API_HEADERS) {
    try {
      config.headers = JSON.parse(process.env.API_HEADERS);
    } catch (e) {
      console.warn('Failed to parse API_HEADERS environment variable');
    }
  }

  return config;
}

/**
 * Merge user configuration with defaults and environment variables
 */
export function mergeConfig(userConfig?: SimBriefApiConfig): SimBriefApiConfig {
  const envConfig = getConfigFromEnv();
  
  return {
    ...DEFAULT_CONFIG,
    ...envConfig,
    ...userConfig,
    // Merge headers deeply
    headers: {
      ...envConfig.headers,
      ...userConfig?.headers,
    },
  };
}
