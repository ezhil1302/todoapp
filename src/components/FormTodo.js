import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function FormTodo({addTodo}) {
 const[value, setValue] = useState('')
  
 const handleSubmit = (e) =>{
        e.preventDefault()
        if(!value) return;
        addTodo(value)
        setValue('')
 }

 return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b className="heading">Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={e=>setValue(e.target.value)}
          placeholder="Enter Todo"
        ></Form.Control>
      </Form.Group>
       <Button type="submit" className="mt-2"> Add Todo</Button>
    </Form>
  );
}

export default FormTodo;
