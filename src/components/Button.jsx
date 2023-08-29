import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${props => props.$bgcolor};
  color: #e6e6e6;
  height: 75px;
  width: 75px;
  cursor: pointer;
  &:hover {
    filter: brightness(120%);
  }
`
function Button({bgColor, ...props}) {
  return (
    <StyledButton $bgcolor={bgColor} {...props}>{props.children}</StyledButton>
  )
}

export default Button