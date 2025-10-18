import React, { useState } from 'react';

export default function ToDoList({ todoData, todos = [] }) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    if (input.trim() === '') return;
    todoData(input);
    setInput('');
  }

  return (
    <div className="input-container">
      <input
        className="inputfield"
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={handleChange}
      />
      <button className="add-btn" onClick={handleClick}>
        Add Task
      </button>

      {/* ✅ Render To-Do items dynamically */}
      <div className="preview-list">
        {todos.map((task, i) => (
          <p key={`preview-${i}`}>{task}</p>
        ))}
      </div>
    </div>
  );
}
