import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`;

const BoxChat = styled.div`
    background-color: #535bf2;
    min-width: 300px;
    max-width: 500px;
    padding: 10px 20px;
    border-radius: 20px;

`
function ChitChatResult() {
    const location = useLocation()
    const [messages, setMessages] = useState(()=>{
        return JSON.parse(sessionStorage.getItem("message")) || []
    })
    useEffect(()=>{
        if(location.state.message){
            sessionStorage.setItem("message", JSON.stringify([...messages, location.state.message]))
        }
        const getStorage = JSON.parse(sessionStorage.getItem("message"))
        setMessages(getStorage)
    },[])
    window.onload = function(event) {
        setMessages([])
        sessionStorage.clear()
    };
  return (
    <Container>
        <h1>ChitChat Result</h1>
        {
            messages?.map((dt, idx) => {
                return <BoxChat key={idx}>{dt}</BoxChat>
            })
        }
    </Container>
  )
}

export default ChitChatResult