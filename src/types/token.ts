export type CollectionType = {
    name: string;
}

export type OwnerType = {
    twitter: string | null;
    yat: string;
}

export type AssetType = {
    id: number;
    url: string;
}

export type TokenType = {
    collection: CollectionType;
    asset: AssetType;
    transaction: {
        date: string;
        currency: string;
        amount: number;
    },
    owner: OwnerType;
}

export type TokensResponse = {
    name: string;
    description: string;
    total: number;
    stats: {
        tokens: number;
        owners: number;
        floorPrice: { current: number },
        volume: {
            daily: number;
            weekly: number;
            monthly: number;
        }
    },
    tokens: TokenType[];
}
