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

export type StatsResponse = {
    name: string;
    description: string;
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
}

export type TokensResponse = {
    total: number;
    tokens: TokenType[];
    thumbnail: string;
}
