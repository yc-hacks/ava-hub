// Environment Variables for Webpack

declare const SERVER_BASE_URL: string;
declare const MODEL_SERVER_BASE_URL: string;

const _MODEL_SERVER_BASE_URL = MODEL_SERVER_BASE_URL;
const _SERVER_BASE_URL = SERVER_BASE_URL;
export { _SERVER_BASE_URL as SERVER_BASE_URL };
export { _MODEL_SERVER_BASE_URL as MODEL_SERVER_BASE_URL };
