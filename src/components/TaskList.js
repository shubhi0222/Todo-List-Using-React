import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, updateTask, toggleCompletion }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} updateTask={updateTask} toggleCompletion={toggleCompletion} />
      ))}
    </div>
  );
}

export default TaskList;
