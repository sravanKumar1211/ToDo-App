import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import './App.css';

export default function App() {
  // State to handle pending, todos, and completed
  const [pending, setPending] = useState([]);
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  // Function to add todo-task
  function addTask(task) {
    setTodos((prev) => [...prev, task]);
  }

  // Function to delete a todo-task
  function deleteTask(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  // Function to mark task as completed
  function markComplete(index) {
    const task = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    setCompleted((prev) => [...prev, task]);
  }

  // Function to mark task as pending
  function markPending(index) {
    const task = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    setPending((prev) => [...prev, task]);
  }

  // Function to edit a task
  function editTask(index, newTask) {
    const updated = [...todos];
    updated[index] = newTask;
    setTodos(updated);
  }

  // Function to clear specific sections
  function clearSection(section) {
    if (section === 'pending') setPending([]);
    if (section === 'todos') setTodos([]);
    if (section === 'completed') setCompleted([]);
  }

  return (
    <>
      {/* Header component */}
      <Header />

      {/* ToDoList now handles rendering ToDoItems */}
      <ToDoList
        todoData={addTask}
        todos={todos}
        onDelete={deleteTask}
        onComplete={markComplete}
        onPending={markPending}
        onEdit={editTask}
        onClear={() => clearSection('todos')}
      />

      <div className="containers">
        {/* Pending Section */}
        <div className="section pending-section">
          <h2>Pending</h2>
          {/* button to clear pending tasks */}
          <button className="clear-btn" onClick={() => clearSection('pending')}>
            Clear
          </button>
          {/* maps over pending tasks and render ToDoItem for each */}
          {pending.map((task, i) => (
            <ToDoItem key={`pending-${i}`} data={task} type="pending" />
          ))}
        </div>

        {/* Completed Section */}
        <div className="section completed-section">
          <h2>Completed</h2>
          {/* button to clear completed tasks */}
          <button className="clear-btn" onClick={() => clearSection('completed')}>
            Clear
          </button>
          {/* maps over completed tasks and render ToDoItem for each */}
          {completed.map((task, i) => (
            <ToDoItem key={`completed-${i}`} data={task} type="completed" />
          ))}
        </div>
      </div>
    </>
  );
}
