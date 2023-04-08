import { forwardRef, ForwardedRef, ReactElement } from 'react';
import clsx from 'clsx';
import type { StyledProps } from 'types';
import './icon.scss';

export type IconProps = StyledProps & {
    content: string | string[];

    viewBoxWidth?: number;
    viewBoxHeight?: number;

    size?: 'sm' | 'md' | 'lg';
};

const IconComponent = ((
    { content, className, viewBoxWidth = 24, viewBoxHeight = 24, size = 'md' }: IconProps,
    ref: ForwardedRef<SVGSVGElement>
): ReactElement => (
    <svg
        ref={ref}
        className={clsx(['icon', `icon-${size}`, className])}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        xmlns="http://www.w3.org/2000/svg"
    >
        {typeof content === 'string' && <path d={content} fillRule="evenodd" clipRule="evenodd" />}
        {Array.isArray(content) && content.map((item: string, idx: number) => (
            <path key={idx} d={item} fillRule="evenodd" clipRule="evenodd" />
        ))}
    </svg>
));

export const Icon = forwardRef<SVGSVGElement, IconProps>(IconComponent);
