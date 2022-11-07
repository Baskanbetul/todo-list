import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [todos,setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>To do List</p>
      </header>
    </div>
  );
}

export default App;
