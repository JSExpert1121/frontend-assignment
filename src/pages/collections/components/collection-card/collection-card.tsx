import { useState } from 'react';
import { Typography } from 'components/base/typography';
import collectionImage from 'assets/images/collection.png';
import { StyledProps } from 'types';
import './collection-card.scss';
import clsx from 'clsx';

export const CollectionCard = ({ className }: StyledProps ) => {
    const [collection] = useState('Collection name');

    return (
        <article className={clsx(['collection-card', className])}>
            <img className='cover' src={collectionImage} alt='collection' />

            <div className='content'>
                <Typography type='h2' className='title'>{collection}</Typography>
                <Typography type='body-md' className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo magna mauris, sed vulputate odio blandit at. Donec eleifend lectus.
                </Typography>
            </div>
        </article>
    )
}