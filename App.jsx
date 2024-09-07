import React, { useState } from 'react';
import AppName from "./components/appName";
import AddToDo from "./components/add_todo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WlcmMsg from './components/welcomeMsg';
function App() {
  const [toDoItems,setTodoItems]=useState([]);

  const handleNewItem =(itemName,itemDueDate) => {
    console.log(`New item added: ${itemName} and date id ${itemDueDate}`);
    const newToDoItems=[...toDoItems,{name:itemName,dueDate:itemDueDate}]
    setTodoItems(newToDoItems)
  }

  const handleDeleteItem=(todoItemName)=>{
    console.log(`Item ${todoItemName} deleted `)
    const newtodoitems=toDoItems.filter(item=>item.name!==todoItemName)
    setTodoItems(newtodoitems);
  }
  
  return (
    <div className="todo-container text-center">
      <AppName />
      <AddToDo onNewItem={handleNewItem }/>
      {toDoItems.length<=0 && <WlcmMsg/>}
      <TodoItems toDoItems={toDoItems} onDeleteClick={handleDeleteItem} />
    </div>
  )
}

export default App;
 