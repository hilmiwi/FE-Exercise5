import { useState } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  min-width: 400px;
`;
const Timer = styled.p`
  font-size: 10em;
  font-weight: 700;
  margin: 0 0 20px 0;
`;
function Stopwatch() {
  const [timer, setTimer] = useState(false);
  const [time, setTime] = useState(0)
  useEffect(()=>{
    let intervalId;
    if (timer) {
      intervalId = setInterval(() => setTime(time + 1), 1000);
    }
    return () => clearInterval(intervalId);
  },[timer, time])

  const minute = Math.floor((time % 3600) / 60);
  const second = Math.floor((time % 60));
  return (
    <Container>
      <h1>Stopwatch</h1>
      <Timer>
        {minute.toString().padStart(2, "0")}:
        {second.toString().padStart(2, "0")}
      </Timer>
      <ButtonWrapper>
        <Button bgColor="#00bb09" onClick={()=>setTimer(true)}>Start</Button>
        <Button bgColor="#bb0000" onClick={()=>setTimer(false)}>Stop</Button>
        <Button bgColor="#bbae00" onClick={()=>{setTimer(false); setTime(0)}}>Reset</Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Stopwatch;
