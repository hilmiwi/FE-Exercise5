import React from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import Stopwatch from './containers/Stopwatch'
import Counter from './containers/Counter'
import FilterSearch from './containers/FilterSearch'
import Home from './containers/Home'
import NotFound from './containers/NotFound'
import { styled } from 'styled-components'
import ChitChat from './containers/ChitChat'
import FetchApi from './containers/FetchApi'
import ChitChatResult from './containers/ChitChatResult'

const Back = styled(Link)`
  position: absolute;
  top:20px;
  left: 20px;
  font-size: 1.2em;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #747bff;
`
function App() {
  const location = useLocation()
  return (
    <>
    {location.pathname !== '/' && <Back to={location.pathname === '/chitchat/list' ? -1 :'/'}>Back</Back>}
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/stopwatch' element={<Stopwatch/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/filter-search' element={<FilterSearch/>}/>
      <Route path='/fetch-api' element={<FetchApi/>}/>
      <Route path='/chitchat' element={<ChitChat/>}/>
      <Route path='/chitchat/list' element={<ChitChatResult/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App