import React from "react";

const Todo = ( { todo, toggleComplete }) => {
  
return (
  <div style={{ display:'flex' }}>
    <input type="checkbox" />
    <li style={{
      color:'white',
      textDecoration: todo.completed ? "line-through":null
    }}
    >
    {todo.task}</li>
    <button>X</button>
  </div>
)
}

export default Todo;