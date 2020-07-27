import styled, { keyframes } from "styled-components";

//animation动画写法
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  background: red;
`;
