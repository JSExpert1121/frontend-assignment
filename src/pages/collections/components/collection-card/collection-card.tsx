import clsx from 'clsx';
import { Typography } from 'components/base/typography';
import collectionImage from 'assets/images/collection.png';
import { StyledProps } from 'types';
import './collection-card.scss';

type CollectionCardType = StyledProps & {
    collection: string;
    description: string;
}

export const CollectionCard = ({ collection, description, className }: CollectionCardType) => (
    <article className={clsx(['collection-card', className])}>
        <img className='cover' src={collectionImage} alt='collection' />

        <div className='content'>
            <Typography type='h2' className='title'>{collection}</Typography>
            <Typography type='body-md' className='description'>
                {description}
            </Typography>
        </div>
    </article>
);
