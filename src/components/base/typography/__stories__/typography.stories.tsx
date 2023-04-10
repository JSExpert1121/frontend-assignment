import { StoryObj, StoryFn } from '@storybook/react';
import { Typography, TypographyProps } from '../typography';

export default {
    title: 'Example/Typography',
    component: Typography,
};

type Story = StoryObj<typeof Typography>;

const PlaygroundTemplate: StoryFn = (props: Omit<TypographyProps, 'children'>) => (
    <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Typography {...props}>Hello World!</Typography>
    </div>
);
export const Playground = PlaygroundTemplate.bind({});

type TypographiesByTypeProps = Omit<TypographyProps, 'type'>
const TypographiesByType = ({ as, isHeavy }: TypographiesByTypeProps) => (
    <div>
        <Typography {...{ as, isHeavy }} type='h1'>Hello World!</Typography>
        <Typography {...{ as, isHeavy }} type='h2'>Hello World!</Typography>
        <Typography {...{ as, isHeavy }} type='h3'>Hello World!</Typography>
        <Typography {...{ as, isHeavy }} type='h4'>Hello World!</Typography>
        <Typography {...{ as, isHeavy }} type='h5'>Hello World!</Typography>
        <Typography {...{ as, isHeavy }} type='h6'>Hello World!</Typography>
        <Typography {...{ as, isHeavy }} type='body-sm'>Hello World!</Typography>
        <Typography {...{ as, isHeavy }} type='body-md'>Hello World!</Typography>
        <Typography {...{ as, isHeavy }} type='body-lg'>Hello World!</Typography>
    </div>
)

export const Default: Story = {
    render: () => (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TypographiesByType />
        </div>
    )
}

export const Heavy: Story = {
    render: () => (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TypographiesByType isHeavy />
        </div>
    )
}

export const Span: Story = {
    render: () => (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TypographiesByType isHeavy as='span' />
        </div>
    )
}
