import { useState } from 'react';
import { useQuery } from 'react-query';
import { getCollections } from 'service';
import { CollectionType } from 'types';
import { CollectionCard } from './components';
import { StatCard } from './components/stat-card';
import { Typography } from 'components/base/typography';
import { TextField } from 'components/base/text-field';
import './styles.scss';

export function Collections() {
    const [filter, setFilter] = useState('');

    const {
        data: collections,
        isLoading: collectionsFetching,
        error: collectionsError
    } = useQuery<CollectionType[], any>(['collections', filter], getCollections);

    console.log(collections, collectionsFetching, collectionsError);
    return (
        <section className='container container-lg'>
            <section className='collections-topbar'>
                <CollectionCard />
                <section className='stats'>
                    <StatCard label='ASSETS' value={10000} />
                    <StatCard label='HOLDERS' value={5257} />
                    <StatCard label='VOLUME' value={98561} />
                    <StatCard label='FLOOR PRICE' value={0.515} />
                </section>
            </section>

            <section className='collections-content'>
                <div className='search-bar'>
                    <Typography type='h3' isHeavy>Collection activity</Typography>
                    <TextField
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        onSearch={setFilter}
                        className='search-input'
                    />
                </div>
            </section>
        </section>
    );
}
