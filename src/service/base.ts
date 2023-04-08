import { queryString } from 'utils';

export const BASE_URL = 'http://mock-server';

export const get = async (
    url: string,
    queries: { [key: string]: string | number } = {}
) => {
    const query = queryString(queries);
    const res = await fetch(`${url}${query}`);
    return res.json();
}
