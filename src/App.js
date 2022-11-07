import './App.css';
import React, { useState } from 'react';
import TodoForm from './Component/TodoForm';

const App = () => {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>To do List</p>
        <TodoForm addTodo={addTodo}/>
      </header>
    </div>
  );
}

export default App;
