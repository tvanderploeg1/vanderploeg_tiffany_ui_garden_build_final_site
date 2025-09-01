import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  td {
    padding: 8px;
    border: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableFooter
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      {children}
    </StyledTableFooter>
  );
};

export default TableFooter;
