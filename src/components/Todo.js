import React from 'react'
import { Button } from 'react-bootstrap'
 import './Todo.css'
function Todo({todo,index, markTodo,deleteTodo}) {

  const {text, isDone} =todo;
  return (
    <div className='todo'>
      <span style={{textDecoration: isDone ?'line-through':''}}>{todo.text}</span>
       <div className='todo-button'>
       <Button onClick={()=>markTodo(index)}>{isDone ?"Not Done":"Done"}</Button>
      <Button  onClick={()=>deleteTodo(index
        )} variant='danger'>Delete</Button>
       </div>
    </div>
  )
}

export default Todo