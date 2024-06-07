import axios, { AxiosInstance } from 'axios';

const nightOpeningURL = 'test';
export const nightOpeningAxios: AxiosInstance = axios.create({
  baseURL: `${nightOpeningURL}`,
});
