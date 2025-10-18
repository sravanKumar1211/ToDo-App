import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import './App.css';

export default function App() {
  const [pending, setPending] = useState([]);
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  function addTask(task) {
    setTodos((prev) => [...prev, task]);
  }

  function deleteTask(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function markComplete(index) {
    const task = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    setCompleted((prev) => [...prev, task]);
  }

  function markPending(index) {
    const task = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    setPending((prev) => [...prev, task]);
  }

  function clearSection(section) {
    if (section === 'pending') setPending([]);
    if (section === 'todos') setTodos([]);
    if (section === 'completed') setCompleted([]);
  }

  return (
    <>
      <Header />
      <ToDoList todoData={addTask} />

      <div className="containers">
        {/* Pending Section */}
        <div className="section pending-section">
          <h2>Pending</h2>
          <button className="clear-btn" onClick={() => clearSection('pending')}>Clear</button>
          {pending.map((task, i) => (
            <ToDoItem key={i} data={task} type="pending" />
          ))}
        </div>

        {/* Todos Section */}
        <div className="section todo-section">
          <h2>To-Do</h2>
          <button className="clear-btn" onClick={() => clearSection('todos')}>Clear</button>
          {todos.map((task, i) => (
            <ToDoItem
              key={i}
              data={task}
              onDelete={() => deleteTask(i)}
              onComplete={() => markComplete(i)}
              onPending={() => markPending(i)}
              type="todo"
            />
          ))}
        </div>

        {/* Completed Section */}
        <div className="section completed-section">
          <h2>Completed</h2>
          <button className="clear-btn" onClick={() => clearSection('completed')}>Clear</button>
          {completed.map((task, i) => (
            <ToDoItem key={i} data={task} type="completed" />
          ))}
        </div>
      </div>
    </>
  );
}
