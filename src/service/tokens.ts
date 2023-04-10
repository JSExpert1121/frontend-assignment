import { get, BASE_URL } from './base';

export const getTokens = (
    owner: string,
    keyword: string,
    orderby: string,
    order: string,
    start?: number,
    size?: number
) => {
    return get(
        `${BASE_URL}/collection/test`,
        { owner, keyword, orderby, order, start, size }
    );
}
