import Config from "@config";
import axios, { AxiosRequestConfig } from "axios";

const httpClient = axios.create({
  baseURL: Config.API_BASE_URL,
});

httpClient.interceptors.request.use((requestConfig: AxiosRequestConfig) => {
  const authHeader = { Authorization: `Bearer ${Config.API_TOKEN}` };
  requestConfig.headers = requestConfig.headers
    ? Object.assign(requestConfig.headers, authHeader)
    : authHeader;

  return requestConfig;
});

export const client = httpClient;
