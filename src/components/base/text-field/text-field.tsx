import { forwardRef } from 'react';
import { ForwardedRef, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { StyledProps } from 'types';
import './text-field.scss';

type AllowedElements = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextFieldProps = StyledProps & {
    /**
     * The typography style to use.
     * @default "body-md"
     */
    type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body-lg'
    | 'body-md'
    | 'body-sm';

    /**
     * Whether to use heavy styles, for body typographies.
     * @default false
     */
    isHeavy?: boolean;

    /** Which element the text should be rendered as. */
    as?: AllowedElements;

    /** The text to render. */
    children?: ReactNode;
};

const DEFAULT_ELEMENT = 'p';
const DEFAULT_ELEMENT_BY_TYPE: Record<
    NonNullable<TextFieldProps['type']>,
    NonNullable<TextFieldProps['as']>
> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    'body-lg': DEFAULT_ELEMENT,
    'body-md': DEFAULT_ELEMENT,
    'body-sm': DEFAULT_ELEMENT,
} as const;

const TextFieldComponent = ((
    { type = 'body-md', isHeavy = false, as, children, className }: TextFieldProps,
    ref: ForwardedRef<any>
): ReactElement => {
    const ComponentType = as ?? DEFAULT_ELEMENT_BY_TYPE[type];

    return (
        <ComponentType
            ref={ref}
            className={clsx([
                'text-field',
                `type-${type}`,
                { heavy: isHeavy },
                className
            ])}
        >
            {children}
        </ComponentType>
    );
});

/**
 * Styled text. Supports specifying the rendered element via the `as` prop.
 */
const TextField = forwardRef<HTMLElement, TextFieldProps>(TextFieldComponent);

export default TextField;
