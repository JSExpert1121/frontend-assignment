import clsx from 'clsx';
import { Typography } from 'components/base/typography';
import { StyledProps } from 'types';
import './collection-card.scss';

type CollectionCardType = StyledProps & {
    collection: string;
    description: string;
    thumbnail: string;
}

export const CollectionCard = ({ collection, description, thumbnail, className }: CollectionCardType) => (
    <article className={clsx(['collection-card', className])}>
        <div className='cover'>
            <img src={thumbnail} alt='collection' />
        </div>

        <div className='content'>
            <Typography type='h2' className='title'>{collection}</Typography>
            <Typography type='body-md' className='description'>
                {description}
            </Typography>
        </div>
    </article>
);
