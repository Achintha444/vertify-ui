import { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
    title: 'Components/Chip',
    component: Chip,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['upcoming', 'in-progress', 'completed'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Upcoming: Story = {
    args: {
        label: 'Upcoming',
        variant: 'success',
    },
};

export const InProgress: Story = {
    args: {
        label: 'In Progress',
        variant: 'warning',
    },
};

export const Completed: Story = {
    args: {
        label: 'Completed',
        variant: 'disabled',
    },
};
