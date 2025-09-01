import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
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
    children: 'default text',
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <tbody>
        <tr>
          <td>Sample Content</td>
        </tr>
      </tbody>
    ),
    disabled: true,
  },
};
