import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% { background-color: red; }
  50% { background-color: transparent; }
  100% { background-color: red; }
`;

export const CustomErrorMessageStyled = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 10px;
  border-radius: 10px;

  animation: ${blinkAnimation} 1s infinite;
`;
