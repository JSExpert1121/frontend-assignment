import { TokenType } from 'types';

export type QueryFiltersType = {
    owner?: string;
    keyword?: string;
};

function filterByOwner(tokens: TokenType[], owner: string) {
    return tokens.filter((token) => token.owner.twitter === owner);
}

function filterByKeyword(tokens: TokenType[], keyword: string) {
    return tokens.filter((token) => token.collection.name.includes(keyword) || token.owner.twitter?.includes(keyword));
}

export function filterTokens(tokens: TokenType[], filters: QueryFiltersType) {
    let result = tokens;

    const { owner, keyword } = filters;
    if (owner) result = filterByOwner(result, owner);
    if (keyword) result = filterByKeyword(result, keyword);

    return result;
}
