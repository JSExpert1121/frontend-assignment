import { TokenType } from 'types';
import './token-card.scss';
import { Icon } from 'components/base/icon';
import { iconCrypto } from 'assets/icons';
import { Typography } from 'components/base/typography';

type TokenCardProps = {
    data: TokenType;
}
export const TokenCard = ({ data }: TokenCardProps) => {
    return (
        <article className='token-card'>
            <div className='content-box'>
                <img src={data.asset.url} alt={`${data.asset.id}`} className='cover' />

                <section className='sale px-2'>
                    Bought
                    <Icon content={iconCrypto} viewBoxWidth={29} viewBoxHeight={30} />
                    <Typography type='body-md'>{data.transaction.amount}</Typography>
                </section>

                <section className='content px-3'>
                    <Typography type='h6' isHeavy className='m-0 mb-1 ellipsis'>
                        {data.collection.name}: #{data.asset.id}
                    </Typography>
                    <Typography type='body-sm' className='m-0 ellipsis'>
                        {data.collection.name}
                    </Typography>
                </section>

                <section className='owner'>
                    <div>
                        <div className='yat'>{data.owner.yat}</div>
                        {!!data.owner.twitter && <div className='twitter'>@{data.owner.twitter}</div>}
                    </div>
                </section>
            </div>
        </article>
    )
}
