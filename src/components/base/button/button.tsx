import { DOMAttributes } from 'react';
import clsx from 'clsx';
import { StyledProps } from 'types';
import './button.scss';

export type ButtonProps = StyledProps & DOMAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}
export const Button = (
    { children, className, onClick, variant = 'primary', size = 'md', ...others }: ButtonProps
) => (
    <button
        className={clsx([
            'btn',
            `btn-${variant}`,
            `btn-size-${size}`,
            className
        ])}
        onClick={onClick}
        {...others}
    >
        {children}
    </button>
);
