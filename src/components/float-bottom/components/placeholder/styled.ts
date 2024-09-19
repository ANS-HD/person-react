import styled from 'styled-components';

export const Component = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
  background-color: transparent;
`;
