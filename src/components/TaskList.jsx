import React, { useContext, useRef, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, toggleComplete } = useContext(TaskContext);
  const searchRef = useRef();
  const [query, setQuery] = useState("");

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        ref={searchRef} 
        type="text" 
        placeholder="Search tasks..." 
        onChange={() => setQuery(searchRef.current.value)} 
      />
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
            <button 
              data-testid={task.id} 
              onClick={() => toggleComplete(task.id)}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;