import { useState } from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  background: linear-gradient(0.4turn, #f2b100, #db2c00,#9500be);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`
const InputWrapper = styled.div`
  display: flex;
`
const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
`
function FilterSearch() {
  const list = [
    'Banana',
    'Apple',
    'Orange',
    'Mango',
    'Pineapple',
    'Watermelon',
    'Strawberry',
    'Persimmon'
  ]
  const [inputVal, setInputVal] = useState('')
  const [filterList, setFilterList] = useState(list)
  
  const filterBySearch = (value) => {
    let updatedList = [...list];
    updatedList = updatedList.filter(word => word.toLowerCase().startsWith(value.toLowerCase())); //suggestion
    // updatedList =  item.toLowerCase().indexOf(query.toLowerCase()) !== -1; // search include
    setFilterList(updatedList);
  };
  const onChangeHandler = (e) =>{
    setInputVal(e.target.value)
    filterBySearch(e.target.value)
  }
  return (
    <Container>
      <InputWrapper>
        <label>Search : </label>
        <input type='text' onChange={(e)=>{onChangeHandler(e)}} value={inputVal}/>
      </InputWrapper>
      {
        filterList.map((dt, idx) => {
          return (
            <ListWrapper key={idx}>
              {dt}
            </ListWrapper>
          )
        })
      }
      
    </Container>
  )
}

export default FilterSearch