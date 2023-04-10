import { StoryObj, StoryFn } from '@storybook/react';
import { Spinner, SpinnerProps } from '../spinner';

export default {
    title: 'Example/Spinner',
    component: Spinner,
};

type Story = StoryObj<typeof Spinner>;

const PlaygroundTemplate: StoryFn = (props: SpinnerProps) => (
    <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Spinner {...props} />
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
                <p style={{ margin: '8px 0' }}>Primary spinners</p>
                <div style={{ display: 'flex', alignItems: 'center', padding: 8, gap: 16, marginBottom: 16 }}>
                    <Spinner variant='primary' size='sm' />
                    <Spinner variant='primary' size='md' />
                    <Spinner variant='primary' size='lg' />
                </div>

                <p style={{ margin: '8px 0' }}>Secondary spinners</p>
                <div style={{ display: 'flex', alignItems: 'center', padding: 8, gap: 16, marginBottom: 16 }}>
                    <Spinner variant='secondary' size='sm' />
                    <Spinner variant='secondary' size='md' />
                    <Spinner variant='secondary' size='lg' />
                </div>
            </div>
        </div>
    )
}
