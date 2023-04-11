import { useState, KeyboardEvent, Fragment, useRef, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getTokens } from 'service';
import { TokenType, TokensResponse } from 'types';
import { iconCrypto, iconMore } from 'assets/icons';
import { Typography } from 'components/base/typography';
import { TextField } from 'components/base/text-field';
import { Button } from 'components/base/button';
import { Switch } from 'components/base/switch';
import { Icon } from 'components/base/icon';
import { CollectionCard } from './components';
import { StatCard } from './components/stat-card';
import { TokenCard } from './components/token-card';
import './styles.scss';
import { Spinner } from 'components/base/spinner';
import { isElementInViewport } from 'utils';

const MY_ACCOUNT = 'Alwaregg';

export function Collections() {
    const [filter, setFilter] = useState('');
    const [keyword, setKeyword] = useState('');
    const [isDesc, setIsDesc] = useState(false);
    const [sortBy, setSortBy] = useState('date');
    const [owner, setOwner] = useState('');
    const loaderRef = useRef<HTMLElement>(null);

    const fetchTokens = ({ pageParam = 0 }) => getTokens(
        owner, keyword, sortBy, isDesc ? 'desc' : 'asc', pageParam
    );

    const {
        data: tokensData,
        isFetching: tokensFetching,
        hasNextPage,
        fetchNextPage,
        error: tokensError
    } = useInfiniteQuery<TokensResponse, any, TokensResponse, [string, string, boolean, string, string]>({
        queryKey: ['tokens', keyword, isDesc, sortBy, owner],
        queryFn: fetchTokens,
        getNextPageParam: (lastPage, pages) => {
            const total = pages.reduce((prev, cur) => prev + cur.tokens.length, 0);
            if (total < lastPage.total) return total;
            else return null;
        }
    });

    useEffect(() => {
        const listener = () => {
            if (!hasNextPage || tokensFetching) return;
            if (loaderRef.current && isElementInViewport(loaderRef.current)) {
                fetchNextPage();
            }
        }

        window.addEventListener('scroll', listener);

        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, [hasNextPage, fetchNextPage, tokensFetching])

    const triggerSort = () => setIsDesc(!isDesc);

    const sortByDate = () => setSortBy('date');
    const sortByPrice = () => setSortBy('price');

    const queryAll = () => setOwner('');
    const queryMine = () => setOwner(MY_ACCOUNT);

    const handleKeyInput = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            setKeyword(filter);
        }
    };

    const handleKeywordChange = (keyword: string) => {
        setFilter(keyword);
        setKeyword(keyword);
    }

    const pageCount = tokensData?.pages?.length ?? 0;
    const lastPage = tokensData?.pages?.[pageCount - 1];

    return (
        <section className='container container-lg'>
            <section className='collections-topbar my-4'>
                <CollectionCard
                    collection={lastPage?.name ?? ''}
                    description={lastPage?.description ?? ''}
                />
                <section className='stats my-4'>
                    <StatCard label='ASSETS' value={lastPage?.stats.tokens?.toLocaleString() ?? '-'} />
                    <StatCard label='HOLDERS' value={lastPage?.stats.owners?.toLocaleString() ?? '-'} />
                    <StatCard label='VOLUME' value={lastPage?.stats.volume.daily?.toLocaleString() ?? '-'} />
                    <StatCard
                        label='FLOOR PRICE'
                        value={lastPage?.stats.floorPrice.current.toLocaleString() ?? '-'}
                        icon={<Icon content={iconCrypto} viewBoxWidth={29} viewBoxHeight={30} size='lg' />}
                    />
                </section>
            </section>

            <section className='collections-content'>
                <section className='search-bar'>
                    <Typography type='h3' isHeavy>Collection activity</Typography>
                    <TextField
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        onSearch={handleKeywordChange}
                        className='search-input'
                        onKeyDown={handleKeyInput}
                    />
                </section>

                <section className='action-bar'>
                    <section className='left-buttons'>
                        <Switch on={isDesc} onTrigger={triggerSort} />
                        <Button onClick={sortByDate} disabled={sortBy === 'date'}>
                            Recovery
                        </Button>
                        <Button onClick={sortByPrice} disabled={sortBy === 'price'}>
                            Price
                        </Button>
                    </section>
                    <section className='right-buttons'>
                        <Button onClick={queryAll} disabled={owner === ''}>
                            All items
                        </Button>
                        <Button onClick={queryMine} disabled={owner === MY_ACCOUNT}>
                            My items
                        </Button>
                        <Button>
                            <div className='flex-center'>
                                <Icon content={iconMore} viewBoxWidth={16} viewBoxHeight={11} className='mr-2 w-4' />
                                More filters
                            </div>
                        </Button>
                    </section>
                </section>

                {/* Error if any */}
                {!!tokensError && (
                    <section className='error'>
                        <Typography>{tokensError}</Typography>
                    </section>
                )}

                {/* Tokens */}
                <section className='tokens-cards'>
                    <div className='tokens-container'>
                        {tokensData?.pages?.map((page: TokensResponse, idx: number) => (
                            <Fragment key={idx}>
                                {page.tokens.map((token: TokenType, tokenIdx: number) => (
                                    <TokenCard key={tokenIdx} data={token} />
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </section>

                {/* Spinner */}
                <section className='flex-center my-2' ref={loaderRef}>
                    {tokensFetching && (
                        <Spinner />
                    )}
                </section>
            </section>
        </section>
    );
}
