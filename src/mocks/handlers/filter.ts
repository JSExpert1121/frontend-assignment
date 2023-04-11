import { TokenType } from 'types';

export type QueryFiltersType = {
    owner?: string;
    keyword?: string;
};

function filterByOwner(tokens: TokenType[], owner: string) {
    return tokens.filter((token) => token.owner.twitter === owner);
}

function filterByKeyword(tokens: TokenType[], keyword: string) {
    const regex = new RegExp(keyword, 'i');
    return tokens.filter((token) => token.collection.name.match(regex) || token.owner.twitter?.match(regex));
}

export function filterTokens(tokens: TokenType[], filters: QueryFiltersType) {
    let result = tokens;

    const { owner, keyword } = filters;
    if (owner) result = filterByOwner(result, owner);
    if (keyword) result = filterByKeyword(result, keyword);

    return result;
}
