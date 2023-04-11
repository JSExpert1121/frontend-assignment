import { rest } from 'msw';
import { allTokens } from './database';
import { filterTokens, QueryFiltersType } from './filter';
import { sortTokens, QuerySortersType } from './sorter';
import { limit, QueryLimiterType } from './limiter';

type QueryType = QueryFiltersType & QuerySortersType & QueryLimiterType;

export const getStats = rest.get('http://mock-server/stats', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
            name: 'All collections',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo magna mauris, sed vulputate odio blandit at. Donec eleifend lectus.',
            stats: {
                tokens: 10000,
                owners: 5257,
                volume: {
                    daily: 98561,
                    weekly: 169234,
                    monthly: 4641231
                },
                floorPrice: {
                    current: 0.515
                }
            }
        })
    );
})

export const getTokens = rest.get('http://mock-server/collection/test', (req, res, ctx) => {
    const queries = Object.fromEntries(req.url.searchParams) as QueryType;

    // operation order: filter -> sort -> limit
    let tokens = filterTokens(allTokens, queries);
    tokens = sortTokens(tokens, queries);
    const total = tokens.length;
    tokens = limit(tokens, queries);

    return res(
        ctx.status(200),
        ctx.json({ tokens, total })
    );
});
