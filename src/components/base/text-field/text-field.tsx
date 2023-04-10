import { ChangeEventHandler } from 'react';
import clsx from 'clsx';
import { StyledProps } from 'types';
import './text-field.scss';
import { Icon } from '../icon';
import { iconClose, iconSearch } from 'assets/icons';

export type TextFieldProps = StyledProps & {
    label?: string;
    value: string;
    size?: 'sm' | 'md' | 'lg';
    onChange: ChangeEventHandler<HTMLInputElement>;
    onSearch?: (key: string) => void;
}
export const TextField = ({ label, value, onChange, size = 'md', onSearch, className }: TextFieldProps) => {
    const element = (
        <input
            type='text'
            placeholder={label}
            className={clsx([
                'text-field',
                `text-field-size-${size}`,
                className
            ])}
            {...{ value, onChange }}
        />
    )

    return onSearch ? (
        <div className='search-wrapper'>
            {element}
            <Icon
                viewBoxHeight={20}
                viewBoxWidth={20}
                content={iconSearch}
                onClick={() => onSearch(value)}
                className='search-icon'
            />
            <Icon
                viewBoxHeight={20}
                viewBoxWidth={20}
                content={iconClose}
                onClick={() => onSearch('')}
                className='close-icon'
            />
        </div>
    ) : element;
}
