import { StoryObj, StoryFn } from '@storybook/react';
import { IconButton, IconButtonProps } from '../icon-button';
import { iconHome } from 'assets/icons';
import { Icon } from 'components/base/icon';
import './stories.scss';

export default {
    title: 'Example/IconButton',
    component: IconButton,
};

type Story = StoryObj<typeof IconButton>;

const PlaygroundTemplate: StoryFn = (props: IconButtonProps) => (
    <div style={{
        backgroundColor: '#212121',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <IconButton {...props} className='icon-btn-bg'>
            <Icon content={iconHome} />
        </IconButton>
    </div>
);
export const Playground = PlaygroundTemplate.bind({});

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
            <div style={{ display: 'flex', alignItems: 'center', padding: 8, gap: 16 }}>
                <IconButton size='sm' className='icon-btn-bg'>
                    <Icon content={iconHome} />
                </IconButton>
                <IconButton size='md' className='icon-btn-bg'>
                    <Icon content={iconHome} />
                </IconButton>
                <IconButton size='lg' className='icon-btn-bg'>
                    <Icon content={iconHome} />
                </IconButton>
            </div>
        </div>
    )
}
