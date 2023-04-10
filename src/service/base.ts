import { queryString } from 'utils';

export const BASE_URL = 'http://mock-server';

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export const get = async (
    url: string,
    queries: { [key: string]: string | number | undefined } = {}
) => {
    const query = queryString(queries);
    await sleep(2000);
    const res = await fetch(`${url}${query}`);
    return res.json();
}
