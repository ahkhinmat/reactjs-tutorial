
import { useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import TodoForm from './components/ToDoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList,setTodoList]=useState([
    {id:1,title:'title1'},
    {id:2,title:'title2'},
    {id:3,title:'title3'},
  ]);
  function handleTodoClick(todo){
    console.log(todo);
    const todoIndex=todoList.findIndex(x=>x.id===todo.id);
    if(todoIndex<0) return;
    const newTodoList=[...todoList];
    newTodoList.splice(todoIndex,1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues){
    console.log('form submit ',formValues);
    // add new todo to current todoList
    const newTodo={
        id:todoList.length+1,
        ...formValues//lấy tất cả key có trong formvalues
    }
    const newTodoList=[...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
<div>
<ColorBox/>

<TodoList todos={todoList} onTodoClick={handleTodoClick}/>
<TodoForm  onSubmit={handleTodoFormSubmit}/>
</div>

  );
}

export default App;
