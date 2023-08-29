import React, { useState } from 'react'
import { styled } from 'styled-components'
import { IoSend } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & svg{
        background-color: white;
        padding: 10px;
        border-radius: 50%;
        color: #242424;
        width: 20px;
        height: 20px;
        margin-left: 20px;
        cursor: pointer;
    }
`
const InputChat = styled.input`
    font-size: 1.5em;
    padding: 5px;
`
function ChitChat() {
    const [inputVal, setInputVal] = useState('')
    const onChangeHandler = (e) =>{
        setInputVal(e.target.value)
    }
    const navigate = useNavigate()
    const onClickSend = () => {
        navigate('list', { state: { message: inputVal } });
    }
  return (
    <Container>
        <h1>Chitchat</h1>
        
        <InputWrapper>
            <InputChat type='text' value={inputVal} onChange={(e)=>onChangeHandler(e)}/>
            <IoSend onClick={()=>onClickSend()} />
        </InputWrapper>
    </Container>
  )
}

export default ChitChat