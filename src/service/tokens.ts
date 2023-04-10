import { get, BASE_URL } from './base';

export const getTokens = (
    collection: string,
    owner: string,
    keyword: string,
    orderby: string,
    order: string,
    start?: number,
    end?: number
) => {
    return get(
        `${BASE_URL}/collection/test`,
        { collection, owner, keyword, orderby, order, start, end }
    );
}