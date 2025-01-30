import React from 'react'
import { useState } from 'react';
import '../styles/AddTask.css'

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName.trim());
      setTaskName('');
    }
    else {
      setError("Enter your task")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-container'>
        <input
          type="text"
          value={taskName}
          onChange={(e) => { setTaskName(e.target.value); setError(''); }}
          placeholder="Enter new task"
          className="task-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
        <span className='no-task'>{error}</span>
      </div>

    </form>
  );
}

export default AddTask