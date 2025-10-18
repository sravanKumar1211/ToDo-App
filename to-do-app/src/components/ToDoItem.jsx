import React, { useState } from 'react';

export default function ToDoItem({ data, onDelete, onComplete, onPending, onEdit, type }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(data);

  function handleSave() {
    if (editedTask.trim() === '') return;
    onEdit(editedTask);
    setIsEditing(false);
  }

  return (
    <div className="item">
      <div className="task">
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
          {!isEditing ? (
            <>
              <button className="pending" onClick={onPending}>Do-Later</button>
              <button className="complete" onClick={onComplete}>Complete</button>
              <button className="delete" onClick={onDelete}>Delete</button>
              <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
            </>
          ) : (
            <>
              <button className="save" onClick={handleSave}>Save</button>
              <button className="cancel" onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
