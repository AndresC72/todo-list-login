import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </ul>
  );
};

export default TodoList;
