import { MouseEventHandler, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { StyledProps } from 'types';
import './button.scss';

export type ButtonProps = StyledProps & PropsWithChildren & {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
}
export const Button = (
    { children, className, onClick, variant = 'primary', size = 'md' }: ButtonProps
) => (
    <button
        className={clsx([
            'btn',
            `btn-${variant}`,
            `btn-size-${size}`,
            className
        ])}
        onClick={onClick}
    >
        {children}
    </button>
);
