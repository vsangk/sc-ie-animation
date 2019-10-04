import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotatingDiv = styled.div`
  font-size: 36px;
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
`;

const Hello = () => <RotatingDiv>Hi</RotatingDiv>;

ReactDOM.render(<Hello />, document.getElementById('app'));
