import React, { useState } from 'react';

function TaskItem({ task, updateTask, toggleCompletion }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="task-item">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
        />
        <span onClick={() => setIsExpanded(!isExpanded)}>{task.title}</span>
      </div>
      {isExpanded && (
        <div className="task-details">
          <p>{task.description}</p>
          <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
