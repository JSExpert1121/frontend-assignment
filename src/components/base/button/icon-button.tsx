import { MouseEventHandler, DOMAttributes } from 'react';
import clsx from 'clsx';
import { StyledProps } from 'types';
import './icon-button.scss';

export type IconButtonProps = StyledProps & DOMAttributes<HTMLDivElement> & {
  onClick?: MouseEventHandler<HTMLDivElement>;
  size?: 'sm' | 'md' | 'lg';
}
export const IconButton = ({ children, className, onClick, size = 'md', ...others }: IconButtonProps) => {
  return (
    <div
      className={clsx([
        'icon-btn',
        `icon-btn-size-${size}`,
        className
      ])}
      onClick={onClick}
      {...others}
    >
      {children}
    </div>
  )
}
