import { ReactElement } from 'react';
import { Typography } from 'components/base/typography';
import './stat-card.scss';

type StateCardProps = {
    label: string;
    value: string | number;
    icon?: ReactElement;
}

export const StatCard = ({ label, value, icon }: StateCardProps) => {
    return (
        <article className='stat-card'>
            <Typography type='h6' className='label'>{label}</Typography>

            <section className='value'>
                {icon}
                <Typography type='h3'>{value.toLocaleString()}</Typography>
            </section>
        </article>
    )
}