import React from 'react';
import TDItem from './ToDoItem';

const TodoItems = ({ toDoItems , onDeleteClick }) => {
  return (
    <div className="items">
      {toDoItems.map((item) => (
        <TDItem toDoitem={item.name} toDodate={item.dueDate} onDeleteClick={onDeleteClick} />
      ))}
    </div>
  );
};

export default TodoItems;
