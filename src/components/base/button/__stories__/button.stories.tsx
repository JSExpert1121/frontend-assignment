import { StoryObj, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '../button';

export default {
    title: 'Example/Button',
    component: Button,
};

type Story = StoryObj<typeof Button>;

const ButtonsByVariant = ({ size }: Pick<ButtonProps, 'size'>) => (
    <div style={{ display: 'flex', alignItems: 'center', padding: 8, gap: 16 }}>
        <Button variant='primary' size={size}>Button</Button>
        <Button variant='secondary' size={size}>Button</Button>
        <Button variant='danger' size={size}>Button</Button>
    </div>
)

const PlaygroundTemplate: StoryFn = (props: ButtonProps) => (
    <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Button {...props}>Button</Button>
    </div>
);
export const Playground = PlaygroundTemplate.bind({});

export const Default: Story = {
    render: () => (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div>
                <ButtonsByVariant size='sm' />
                <ButtonsByVariant size='md' />
                <ButtonsByVariant size='lg' />
            </div>
        </div>
    )
}
