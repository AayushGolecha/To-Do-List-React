import React from 'react';

const Task = (props) => {

  // Removes the to-do-task from the list
  const removeTask = (i) => {
    const newTask = props.tasks.filter((input, index) => index !== i)
    props.setTasks(newTask)
    localStorage.setItem('tasks', JSON.stringify(newTask));
  }

  // Edits the to-do-task in the list
  const editTask = (i) => {
    const updateInput = prompt("Enter the changes")
    if (updateInput && updateInput.trim().length !== 0) {
      const updated = props.tasks.map((e, index) => (index === i ? updateInput : e))
      props.setTasks(updated)
      localStorage.setItem('tasks', JSON.stringify(updated));
    }
    else {
      alert("Input cannot be empty")
    }
  }

  return (
    <div id="tasks">
      {props.tasks.map((input, index) => (
        <div className="item">
          <p>{input}</p>
          <div className="btn">
            <button className="green" onClick={() => editTask(index)}>Edit</button>
            <button className="red" onClick={() => removeTask(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Task