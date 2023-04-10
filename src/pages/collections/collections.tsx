import { useQuery } from 'react-query';
import { getCollections } from 'service';
import { CollectionType } from 'types';
import { CollectionCard } from './components';
import { StatCard } from './components/stat-card';
import './styles.scss';

export function Collections() {
    const {
        data: collections,
        isLoading: collectionsFetching,
        error: collectionsError
    } = useQuery<CollectionType[], any>('collections', getCollections);

    console.log(collections, collectionsFetching, collectionsError);
    return (
        <section className='container container-lg'>
            <section className='top-bar'>
                <CollectionCard />
                <section className='stats'>
                    <StatCard label='ASSETS' value={10000} />
                    <StatCard label='HOLDERS' value={5257} />
                    <StatCard label='VOLUME' value={98561} />
                    <StatCard label='FLOOR PRICE' value={0.515} />
                </section>
            </section>
        </section>
    );
}
