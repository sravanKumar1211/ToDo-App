import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

//  ToDoList manages input field and renders ToDoItems
export default function ToDoList({
    todoData,
    todos = [],
    onDelete,
    onComplete,
    onPending,
    onEdit,
    onClear,
}) {
    // state to manage input field value
    const [input, setInput] = useState('');

    // Handle typing or input change
    function handleChange(e) {
        setInput(e.target.value);
    }

    // Add new task
    function handleClick() {
        if (input.trim() === '') return;
        todoData(input);
        setInput('');
    }

    return (
        <div className="input-container">
            {/* Input + Add button */}
            <input
                className="inputfield"
                type="text"
                placeholder="Enter task..."
                value={input}
                onChange={handleChange}
            />
            {/* add todos task button */}
            <button className="add-btn" onClick={handleClick}>Add Task</button>
            {/* Clear all todos button */}
            <button className="clear-btn" onClick={onClear}>Clear</button>

            {/* Render ToDo items dynamically */}
            <div className="todo-list">
                {/* maps over todos and render ToDoItem for each */}
                {todos.map((task, i) => (
                    <ToDoItem
                        key={`todo-${i}`}
                        data={task}
                        onDelete={() => onDelete(i)}
                        onComplete={() => onComplete(i)}
                        onPending={() => onPending(i)}
                        onEdit={(newTask) => onEdit(i, newTask)}
                        type="todo"
                    />
                ))}
            </div>
        </div>
    );
}
