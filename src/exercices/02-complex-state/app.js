import React, {useReducer} from 'react'
import {Button, Container, InputArea, Label} from "../../helpers/Styled";
import { reducer } from './reducer';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INPUT = 'INPUT';


const IncAction = {type: INCREMENT}
const DecAction = {type: DECREMENT}
const InputAction = function(payload){
  return {type: INPUT, payload}
}

const initialState = {count: 0, text: ""}
export const Exercise2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Container>
      <p>{state.count}</p>
      <Button onClick={() => dispatch(IncAction)}>+</Button>
      <Button onClick={() => dispatch(DecAction)}>-</Button>
      <Label>Text</Label>
      <InputArea
        value={state.text}
        onChange={({target: {value}}) => dispatch(InputAction(value))}
      />
      Your text is:
      <pre>
        {state.text}
      </pre>
    </Container>
  )
}


