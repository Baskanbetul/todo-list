import './App.css';
import React, { useState } from 'react';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/TodoList';

const App = () => {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      } 
    )
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>To do List</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete}/>
        
      </header>
    </div>
  );
}

export default App;
