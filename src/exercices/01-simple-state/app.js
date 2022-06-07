import React, {useState} from 'react'
import {Container, Button} from "../../helpers/Styled";

export const Exercise1 = () => {
  const [count, updateCount] = useState(0)

  function increment(){
    updateCount(count +1)
  }
  function decrement(){
    updateCount(count - 1)
  }
  return (
    <Container>
      <p>{count}</p>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement} >-</Button>
    </Container>
  )
};