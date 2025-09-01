import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg',
    alt: 'Festival Fam',
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg',
    alt: 'Disabled Image',
    disabled: true,
  },
};
