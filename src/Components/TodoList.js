import React from 'react'
import Todo from './Todo'
function TodoList(props) {
  return (
    <div>
      {props.todoList.map((todoItem)=>
      <Todo setTodoList={props.setTodoList} key={todoItem.id} todoItem={todoItem} todoList={props.todoList}></Todo>
      )}
    </div>
  )
}

export default TodoList
