import { get, BASE_URL } from './base';

export const getStats = async () => get(`${BASE_URL}/stats`);
