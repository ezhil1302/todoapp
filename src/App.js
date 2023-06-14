import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormTodo from "./components/FormTodo";
import { Card} from "react-bootstrap";
import Todo from "./components/Todo";
function App() {
  const[todos, setTodos]=useState([
    {
      text: 'Like the text',
      isDone: false
    }
 
  ])

  const addTodo = (text) =>{
         const newTodo =[...todos,{text,isDone:false}]
           setTodos(newTodo)
        }



        const markTodo = (index) =>{
          const newTodo =[...todos]
          newTodo[index].isDone =!newTodo[index].isDone
            setTodos(newTodo)
         }
 


         const deleteTodo = (index) =>{
          const newTodo =[...todos]
           newTodo.splice(index,1)
            setTodos(newTodo)
         }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4 heading">TODO LIST</h1>
        <FormTodo addTodo={addTodo}  />
        <br/>

<div className="todos ">
   {
    todos.map((todo,index)=>(
   <Card>
      <Card.Body>
      <Todo todo={todo} index={index} markTodo={markTodo} deleteTodo={deleteTodo}/>

      </Card.Body>
   </Card>
    ))
   }
</div>

        
      </div>
    </div>
  );
}

export default App;
