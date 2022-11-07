import './App.css';
import React, { useState } from 'react';
import TodoForm from './Component/TodoForm';

const App = () => {
  const [todos,setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>To do List</p>
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
