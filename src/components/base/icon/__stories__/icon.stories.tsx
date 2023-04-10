import { StoryObj, StoryFn } from '@storybook/react';
import { iconHome, iconPerson, iconEmoji, iconDiamond } from 'assets/icons';
import { Icon, IconProps } from '../icon';

export default {
    title: 'Example/Icon',
    component: Icon,
};

type Story = StoryObj<typeof Icon>;

const PlaygroundTemplate: StoryFn = (props: Omit<IconProps, 'content'>) => (
    <div style={{
        backgroundColor: '#212121',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon {...props} content={iconHome} />
            <Icon {...props} content={iconPerson} />
            <Icon {...props} content={iconEmoji} />
            <Icon {...props} content={iconDiamond} />
        </div>
    </div>
);
export const Playground = PlaygroundTemplate.bind({});

type IconsByContentProps = Omit<IconProps, 'content'> & {
    description?: boolean
};

const IconsByContent = ({ viewBoxWidth, viewBoxHeight, size, description = false }: IconsByContentProps) => (
    <div>
        {description && <p style={{ color: '#DCDCDC', margin: 8, fontStyle: 'italic' }}>Icons with size = {size}</p>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon content={iconHome} {...{ size, viewBoxWidth, viewBoxHeight }} />
            <Icon content={iconPerson} {...{ size, viewBoxWidth, viewBoxHeight }} />
            <Icon content={iconEmoji} {...{ size, viewBoxWidth, viewBoxHeight }} />
            <Icon content={iconDiamond} {...{ size, viewBoxWidth, viewBoxHeight }} />
        </div>
    </div>
)

export const Default: Story = {
    render: () => (
        <div style={{
            backgroundColor: '#212121',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '8px 16px' }}>
                <IconsByContent size='sm' description />
                <IconsByContent size='md' description />
                <IconsByContent size='lg' description />
            </div>
        </div>
    )
}

export const ViewBox: Story = {
    render: () => (
        <div style={{
            backgroundColor: '#212121',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '8px 16px' }}>
                {[20, 24, 32].map(size => (
                    <div key={size}>
                        <p style={{ color: '#DCDCDC', margin: 8, fontWeight: 500, fontStyle: 'italic' }}>Icons with viewbox = {size}</p>
                        <IconsByContent size='md' viewBoxWidth={size} viewBoxHeight={size} />
                    </div>
                ))}
            </div>
        </div>
    )
}
