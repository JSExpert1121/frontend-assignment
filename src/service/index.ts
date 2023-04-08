import { queryString } from 'utils';

const BASE_URL = 'http://mock-server';

export const getCollections = async () => {
    const res = await fetch(`${BASE_URL}/collections`);
    return res.json();
};

export const getTokens = async (
    collection: string,
    owner: string,
    keyword: string,
    orderby: string,
    order: string,
    start: number,
    end: number
) => {
    const query = queryString({ collection, owner, keyword, orderby, order, start, end });
    const res = await fetch(`http://mock-server/collection/test${query}`);
    return res.json();
}