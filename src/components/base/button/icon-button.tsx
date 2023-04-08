import { MouseEventHandler, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { StyledProps } from 'types';
import './icon-button.scss';

export type IconButtonProps = StyledProps & PropsWithChildren & {
  onClick?: MouseEventHandler<HTMLDivElement>;
  size?: 'sm' | 'md' | 'lg';
}
export const IconButton = ({ children, className, onClick, size = 'md' }: IconButtonProps) => {
  return (
    <div
      className={clsx([
        'icon-btn',
        `icon-btn-size-${size}`,
        className
      ])}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
