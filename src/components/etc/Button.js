import React from 'react';
import styled, { css }from 'styled-components';


const StyledButton = styled.button`
background-color: ${(props)=>props.bgColor};

${(props)=>
  props.size === 'small' &&
  css`
    width: 3rem;
    height: 2rem;
    font-size: 1.25rem;
  `}
  ${(props)=>
  props.size === 'medium' &&
  css`
    width: 6rem;
    height: 3rem;
    font-size: 1.5rem;
  `}
  ${(props)=>
  props.size === 'large' &&
  css`
    width: 15rem;
    height: 3rem;
    font-size: 1.6rem;
    font-weight: bold;
  `}

color: white;
border-radius: 4px;
border: none;
&:hover { cursor: pointer; }

`;

const Button = ({children, bgColor, size, onClick}) => {

    return(
      <StyledButton
        onClick={onClick}
        bgColor={bgColor}
        size={size}
      >
      {children}
      </StyledButton>
    ); 
  }

export default Button;