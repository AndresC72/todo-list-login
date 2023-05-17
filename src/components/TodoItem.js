import React from 'react';

const TodoItem = ({ task, deleteTask }) => {
  return (
    <li>
      {task}
      <button onClick={deleteTask}>Eliminar</button>
    </li>
  );
};

export default TodoItem;
