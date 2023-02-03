import React from 'react'
import './style.css'
function Todo({todoItem, todoList, setTodoList}) {
  const deleteTodo=()=>{
    
    setTodoList(todoList.filter(item=> item.id !== todoItem.id))
  }
  return (
    <div>
      <div class="todoitem">
        <h3 class="todoname">{todoItem.name}</h3>
        <button onClick={deleteTodo} class="deletebtn">Done</button>
      </div>
    </div>
  )
}

export default Todo
