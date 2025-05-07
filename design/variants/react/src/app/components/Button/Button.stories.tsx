// design/variants/react/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: 'Primary Button',
    variant: 'primary',
    size: 'md',
    onPress: () => alert('Primary clicked'),
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
    onPress: () => alert('Secondary clicked'),
  },
};

export const Outline: Story = {
  args: {
    title: 'Outline Button',
    variant: 'outline',
    size: 'md',
    onPress: () => alert('Outline clicked'),
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
    onPress: () => alert('Should not trigger'),
  },
};

function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

