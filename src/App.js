
import './App.css';
import React, { useState, useEffect } from 'react';
import Box from './inputbox'
import Task from './task'

function App() {
  const [userInput, setUserInput] = useState('')
  const [tasks, setTasks] = useState(() => {
    const json = localStorage.getItem('items');
    if (!json) return [];
    return JSON.parse(json);
  });
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }
  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem('items', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault()
    if (userInput !== "") {
      setTasks([...tasks, userInput])
      setUserInput("")
    }
    else {
      alert("Enter some task!")
    }
  }

  const remove = (i) => {
    const newTask = tasks.filter((input) => input !== i)
    setTasks(newTask)
  }
  const edit = (i) => {
    const updateInput = prompt("Enter the new task")
    if (updateInput.trim().length !== 0) {
      const updated = tasks.map((e) => {
        if (i === e) {
          return [...updateInput]
        }
        else {
          return e
        }
      });
      setTasks(updated)
    }
  }
  return (
    <div className="App">
      <h1>TO-DO-LIST</h1>
      <Box handleInput={handleInput} addTask={addTask} userInput={userInput} />
      <Task tasks={tasks} remove={remove} edit={edit} />
    </div>
  );
}

export default App;
