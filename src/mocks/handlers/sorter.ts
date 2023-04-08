import { TokenType } from "./types";

export type QuerySortersType = {
    orderby?: 'price' | 'date';
    order?: 'desc' | 'asc';
}

function sortByPrice(order = 'desc') {
    return function (a: TokenType, b: TokenType) {
        const diff = a.transaction.amount - b.transaction.amount;
        if (order === 'desc') return -diff;
        else return diff;
    }
}

function sortByDate(order = 'desc') {
    return function (a: TokenType, b: TokenType) {
        const diff = new Date(a.transaction.date).getTime() - new Date(b.transaction.date).getTime();
        if (order === 'desc') return -diff;
        else return diff;
    }
}

export function sortTokens(tokens: TokenType[], filters: QuerySortersType) {
    const { orderby, order } = filters;

    let result = tokens;
    if (orderby === 'price') {
        result = result.sort(sortByPrice(order));
    } else if (orderby === 'date') {
        result = result.sort(sortByDate(order));
    }

    return result;
}
