import React, { useState } from 'react';

// prop destructuring with default value for type
export default function ToDoItem({ data, onDelete, onComplete, onPending, onEdit, type }) {
    // state to manage editing mode and edited task value
  const [isEditing, setIsEditing] = useState(false);
//   state to manage the edited task text
  const [editedTask, setEditedTask] = useState(data);

  // Save edited task
  function handleSave() {
    if (editedTask.trim() === '') return;
    onEdit(editedTask);
    setIsEditing(false);
  }

  return (
    <div className="item">
        {/* edit the task using turnary operator */}
      <div className="task">
        {/* new input field for editing task */}
        {isEditing ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        ) : (
          <p>{data}</p>
        )}
      </div>

      {type === 'todo' && (
        <div className="controls">
            {/* buttons for different actions */}
          {!isEditing ? (
            <>
              <button className="pending" onClick={onPending}>Do Later</button>
              <button className="complete" onClick={onComplete}>Complete</button>
              <button className="delete" onClick={onDelete}>Delete</button>
              <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
            </>
          ) : (
            <>
            {/* buttons for save and cancel editing */}
              <button className="save" onClick={handleSave}>Save</button>
              <button className="cancel" onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

