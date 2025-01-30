import React from 'react'
import '../styles/TaskItem.css'


const TaskItem = ({ task, onEditTask, onDeleteTask, onToggleComplete }) => {
  const handleEdit = () => {
    const newName = prompt('Edit task:', task.name);
    if (newName !== null && newName.trim() !== '') {
      onEditTask({ 
        index: task.originalIndex, 
        name: newName.trim() 
      });
    }
  };

  const handleDelete = () => {
    onDeleteTask(task.originalIndex);
  };

  const handleToggle = () => {
    onToggleComplete(task.originalIndex);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <span className={task.completed ? 'completed' : ''}>
        {task.name}
      </span>
      <button onClick={handleEdit} className="task-item-button">
        Edit
      </button>
      <button onClick={handleDelete} className="task-item-button">
        Delete
      </button>
    </div>
  );
}

export default TaskItem