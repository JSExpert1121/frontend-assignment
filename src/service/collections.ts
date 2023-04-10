import { get, BASE_URL } from './base';

export const getCollections = async () => get(`${BASE_URL}/collections`);
