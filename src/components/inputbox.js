import React from 'react'
import './App.css';

const Box = (props) => {

    // This function handles the input task and set userInput
    const handleInput = (e) => {
        props.setUserInput(e.target.value)
    }

    // For adding the task in to-do-list
    const addTask = (e) => {
        e.preventDefault()
        if (props.userInput !== "") {
            const updated=[...props.tasks, props.userInput]
            props.setTasks(updated)
            localStorage.setItem('tasks', JSON.stringify(updated));
            props.setUserInput("")
        }
        else {
            alert("Enter some task!")
        }
    }

    return (
        <div className='flex'>
            <input type='text' placeholder='Enter the task' value={props.userInput} onChange={handleInput} />
            <button className='blue' onClick={addTask}>Add</button>
        </div>
    )
}
export default Box