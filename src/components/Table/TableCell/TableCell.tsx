import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<TableCellProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 8px;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableCell
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
