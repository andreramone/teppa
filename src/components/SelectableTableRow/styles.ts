import styled, { css } from 'styled-components';

interface TableRowProps {
  isSelected?: boolean;
}

export const Container = styled.tr<TableRowProps>`
  ${(props) =>
    props.isSelected &&
    css`
      > td {
      background-color: #14834e;
      color: #eeeeee;
      }
    `}
`;
