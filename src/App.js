import './App.css';
import React, { useState,useEffect } from 'react';
import Box from './components/inputbox'
import Task from './components/todo-box'

function App() {
  
  const [userInput, setUserInput] = useState('')
  const [tasks, setTasks] = useState([])

  // This hook checks if there is any tasks present in localstorage 
  // it will written that else return an empty array
  useEffect(()=>{
    const values = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(values)
  },[])

  return (
    <div className="App">
      <h1>TO-DO-LIST</h1>
      <div className='bod'></div>
      <Box userInput={userInput} setUserInput={setUserInput} tasks={tasks} setTasks={setTasks} />
      <Task tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
