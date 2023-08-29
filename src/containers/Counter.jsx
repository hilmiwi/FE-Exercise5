import React, { useState } from 'react'
import { styled } from 'styled-components'
import Button from '../components/Button';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const ResultNum = styled.p`
  font-size: 10em;
  font-weight: 700;
  margin: 0 50px 20px 50px;
`;
function Counter() {
    const [num, setNum] = useState(0)
  return (
    <Container>
        <Button style={{fontSize:'2em'}} bgColor='red' onClick={()=>setNum(num - 1)}>-</Button>
        <ResultNum>{num}</ResultNum>
        <Button style={{fontSize:'2em'}}  bgColor='green' onClick={()=>setNum(num + 1)}>+</Button>
    </Container>
  )
}

export default Counter