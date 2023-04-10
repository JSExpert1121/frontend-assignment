import { useState, KeyboardEvent } from 'react';
import { useQuery } from 'react-query';
import { getCollections, getTokens } from 'service';
import { CollectionType, TokenType } from 'types';
import { CollectionCard } from './components';
import { StatCard } from './components/stat-card';
import { Typography } from 'components/base/typography';
import { TextField } from 'components/base/text-field';
import './styles.scss';
import { Button } from 'components/base/button';
import { Switch } from 'components/base/switch';
import { Icon } from 'components/base/icon';
import { iconMore } from 'assets/icons';

const MY_ACCOUNT = 'Alwaregg';

export function Collections() {
    const [collection, setCollection] = useState('');
    const [filter, setFilter] = useState('');
    const [keyword, setKeyword] = useState('');
    const [isDesc, setIsDesc] = useState(false);
    const [sortBy, setSortBy] = useState('date');
    const [owner, setOwner] = useState('');

    const {
        data: collections,
        error: collectionsError
    } = useQuery<CollectionType[], any>(['collections'], getCollections);

    const {
        data: tokens,
        isLoading: tokensFetching,
        error: tokensError
    } = useQuery<TokenType[], any, TokenType[], [string, string, string, boolean, string, string]>({
        queryKey: ['tokens', collection, keyword, isDesc, sortBy, owner],
        queryFn: async ({ queryKey: [_, collection, keyword, isDesc, sortBy, owner] }) => getTokens(
            collection, owner, keyword, sortBy, isDesc ? 'desc' : 'asc'
        )
    });

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

    return (
        <section className='container container-lg'>
            <section className='collections-topbar my-4'>
                <CollectionCard />
                <section className='stats my-4'>
                    <StatCard label='ASSETS' value={10000} />
                    <StatCard label='HOLDERS' value={5257} />
                    <StatCard label='VOLUME' value={98561} />
                    <StatCard label='FLOOR PRICE' value={0.515} />
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
            </section>

            {(!!collectionsError && !!tokensError) && (
                <section className='error'>
                    <Typography>{collectionsError}</Typography>
                    <Typography>{tokensError}</Typography>
                </section>
            )}
        </section>
    );
}
