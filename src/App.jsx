// import { useState } from 'react'
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import {Tabs} from './components/Tabs';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';


// this is a react functional component
// a component is just a function that returns jsx
// jsx is is just html that can have js written inside it
function App() {
  // const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ]


  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: false }
  ]);

  const [selectedTab, setSelectedTab] = useState('Open')


  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {input: newTodo, complete: false}];
    setTodos(newTodoList);
    saveTodos(newTodoList)
  }

  function handleCompleteTodo(index){
    let newTodoList = [...todos];
    const completedTodo = newTodoList[index];
    completedTodo.complete = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    saveTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => { 
     return valIndex !== index
    });
    setTodos(newTodoList);
    saveTodos(newTodoList)
  }

  function saveTodos(newtodos){
    localStorage.setItem('todos-app', JSON.stringify({ todos: newtodos }));
  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todos-app')){ return };
    let db = JSON.parse(localStorage.getItem('todos-app'));
    setTodos(db.todos)
  },[])

  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList 
      selectedTab={selectedTab} 
      todos={todos} 
      handleDeleteTodo={handleDeleteTodo}
      handleCompleteTodo={handleCompleteTodo}
      /> 
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
