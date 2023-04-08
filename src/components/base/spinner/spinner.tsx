import clsx from 'clsx';
import { StyledProps } from 'types';
import './spinner.scss';

export type SpinnerProps = StyledProps & {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}
export const Spinner = (
    { className, variant = 'primary', size = 'md' }: SpinnerProps
) => (
    <div
        className={clsx([
            'spinner',
            `spinner-${variant}`,
            `spinner-size-${size}`,
            className
        ])}
    >
        <div /><div /><div /><div />
    </div>
);
