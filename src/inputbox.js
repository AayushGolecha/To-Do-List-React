import React from 'react'
import './App.css';

const Box = (props) => {
    return (
        <div className='flex'>
            <input type='text' placeholder='Enter the task' value={props.userInput} onChange={props.handleInput} />
            <button style={{ backgroundColor: "blue" }} onClick={props.addTask}>Add</button>
        </div>
    )
}
export default Box