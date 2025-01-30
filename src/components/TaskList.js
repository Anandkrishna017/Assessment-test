import React from 'react'
import TaskItem from './TaskItem';
import '../styles/TaskList.css'


const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleComplete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.originalIndex} className="task-list-item">
          <div className="task-actions">
            <TaskItem
              task={task}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
              onToggleComplete={onToggleComplete}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList