import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.div<TableProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Table: React.FC<TableProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTable
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      {children}
    </StyledTable>
  );
};

export default Table;
