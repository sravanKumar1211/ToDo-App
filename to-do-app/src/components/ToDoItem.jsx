import React from 'react';

export default function ToDoItem({ data, onDelete, onComplete, onPending, type }) {
  return (
    <div className="item">
      <div className="task">
        <p>{data}</p>
      </div>
      {type === 'todo' && (
        <div className="controls">
          <button className="pending" onClick={onPending}>Pending</button>
          <button className="delete" onClick={onDelete}>Delete</button>
          <button className="complete" onClick={onComplete}>Complete</button>
        </div>
      )}
    </div>
  );
}
