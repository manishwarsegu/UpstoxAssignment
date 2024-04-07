import axios from 'axios';

export const BASE_URL = 'https://run.mocky.io';

export const api = axios.create({
  baseURL: BASE_URL,
});
