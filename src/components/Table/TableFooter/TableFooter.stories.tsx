import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TableFooter from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    children: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Text',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Text',
    disabled: true,
  },
};
