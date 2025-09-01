import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.th<TableHeaderProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 8px;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableHeader
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      {children}
    </StyledTableHeader>
  );
};

export default TableHeader;
