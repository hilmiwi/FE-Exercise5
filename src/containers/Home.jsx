import React from 'react'
import { styled } from 'styled-components'
import BoxList from '../components/BoxList';
import { GoNumber } from 'react-icons/go';
import {FaStopwatch, FaSearch, FaCommentDots, FaTable} from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`;

function Home() {
  return (
    <Container>
      <h1>Exercise List</h1>
      <BoxList to='/counter'><GoNumber/> Counter</BoxList>
      <BoxList to='/stopwatch'><FaStopwatch/> Stopwatch</BoxList>
      <BoxList to='/filter-search'><FaSearch/> Filter Search</BoxList>
      <BoxList to='/fetch-api'><FaTable/>Fetch Api</BoxList>
      <BoxList to='/chitchat'><FaCommentDots/>ChitChat</BoxList>
    </Container>
  )
}

export default Home