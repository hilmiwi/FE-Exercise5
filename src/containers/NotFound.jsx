import React, { useState } from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
function Counter() {
  return (
    <Container>
        <h1>404 Not Found</h1>
    </Container>
  )
}

export default Counter