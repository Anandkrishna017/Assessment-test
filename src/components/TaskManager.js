import React from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';
import '../styles/TaskManager.css'

import { useState, useEffect } from 'react';

const TaskManager = () => {
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const completedTasks = tasks
    .map((task, index) => ({ ...task, originalIndex: index }))
    .filter(task => task.completed);

  const incompleteTasks = tasks
    .map((task, index) => ({ ...task, originalIndex: index }))
    .filter(task => !task.completed);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const editTask = ({ index, name }) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = name;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className="container">
      <h1>Task Management</h1>
      <AddTask onAddTask={addTask} />

      {tasks.length === 0 && (
        <p>No tasks available. Add a task!</p>
      )}

      {incompleteTasks.length > 0 && (
        <div>
          <h2>Active Tasks</h2>
          <TaskList
            tasks={incompleteTasks}
            onEditTask={editTask}
            onDeleteTask={deleteTask}
            onToggleComplete={toggleComplete}
          />
        </div>
      )}

      {completedTasks.length > 0 && (
        <div>
          <div className="completed-header">
            <h2>Completed Tasks</h2>
            <button
              onClick={clearCompletedTasks}
              className="clear-btn"
            >
              Clear
            </button>
          </div>
          <TaskList
            tasks={completedTasks}
            onEditTask={editTask}
            onDeleteTask={deleteTask}
            onToggleComplete={toggleComplete}
          />
        </div>
      )}
    </div>
  );
}


export default TaskManager