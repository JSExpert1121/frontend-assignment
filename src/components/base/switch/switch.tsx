import clsx from 'clsx';
import { StyledProps } from 'types';
import './switch.scss';
import { IconButton } from '../button';
import { Icon } from '../icon';
import { iconArrowDown, iconArrowUp } from 'assets/icons';

export type SwitchProps = StyledProps & {
    size?: 'sm' | 'md' | 'lg';
    on: boolean;
    onTrigger: () => void;
    disabled?: boolean;
}
export const Switch = (
    { className, on, onTrigger, size = 'md', ...others }: SwitchProps
) => {

    const triggerSwitch = () => {
        onTrigger();
    }

    return (
        <div
            className={clsx([
                'switch',
                className
            ])}
            onClick={triggerSwitch}
            {...others}
        >
            <IconButton size={size} className={clsx([{ disabled: on }])}>
                <Icon content={iconArrowUp} size={size} viewBoxHeight={12} viewBoxWidth={10} />
            </IconButton>
            <IconButton size={size}  className={clsx([{ disabled: !on }])}>
                <Icon content={iconArrowDown} size={size} viewBoxHeight={12} viewBoxWidth={10} />
            </IconButton>
        </div>
    );
}
