import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom';

const Box = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  height: 100px;
  border-radius: 15px;
  background-color: #242424;
  border: 1px solid #616161;
  box-shadow: -1px 8px 22px -1px rgba(0,0,0,0.4);
  & svg{
    height: 40px;
    width: 40px;
    margin-right: 20px;
  }
  font-size: 1.5em;
`
function BoxList(props) {
  return (
    <Box {...props}>
        {props.children}
    </Box>
  )
}

export default BoxList