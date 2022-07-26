import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLockalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLockalTodos();
  }, [todos, status]);


  const saveLockalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLockalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localToDo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localToDo);
    }
  }

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed !== true))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className='App log'>
      <header>
        <h2>To Do App</h2>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
