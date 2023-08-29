import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Button from '../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const MyTable = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  & th, td{
    border: 1px solid;
    padding: 5px 10px;
  }
  & tr td:last-child{
    display: flex;
    column-gap: 10px;
  }
`
function FetchApi() {
    const [users, setUsers] = useState([])
    const getUsers = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
    }
    useEffect(()=>{
        getUsers()
    },[])
    console.log(users)
  return (
    <Container>
      <h1>FetchApi</h1>
      <MyTable>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {
          users?.map((dt, idx) => {
            return(
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{dt.name}</td>
                <td>{dt.username}</td>
                <td>{dt.email}</td>
                <td><a>Edit</a><a>Delete</a></td>
              </tr>
            )
          })
        }
       
      </MyTable>
    </Container>
  )
}

export default FetchApi