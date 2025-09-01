import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableRow
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
