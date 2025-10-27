const isDevelopment = process.env.REACT_APP_ENV === 'development';

export const base_path = '/';
export const image_path = '/';

// API Configuration
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1';

// Environment flag
export const IS_DEV = isDevelopment;

// Export all environment variables
export const ENV = {
  BASE_PATH: base_path,
  IMAGE_PATH: image_path,
  API_URL: API_URL,
  IS_DEVELOPMENT: isDevelopment,
};

export default ENV;