import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TODOI from './components/TodoInterface';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<TODOI[]>([
    {
      id: 1,
      text: 'first to do',
      completed: true
    }
  ]);

  const addTodos = (todo: string): void => {
    const data = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      text: todo,
      completed: false,

    };
    setTodos((prevTodos: TODOI[]): TODOI[] => [...prevTodos, data]);
    window.alert("Todo added successfully");
  }

  const completedTodo = (id: number): void => {
    const currentTodo : any = todos.find((todo:TODOI) => todo.id === id);
    currentTodo.completed = true;


    const updatedTodos: TODOI[] = todos.map((todo: TODOI): TODOI =>
      todo.id === id ? currentTodo : todo);

    setTodos(updatedTodos);
    window.alert("Todo completed sucessfull");
    console.log("completed todo",todos);
  }

  const deleteToto = (id:number):void =>{
    const deletedTodos: TODOI[] = todos.filter((todo: TODOI): any =>
    todo.id !== id );

    setTodos(deletedTodos);
    window.alert('deleted sucessfully');
  }
 
  console.log(todos);
  return (
    <div className="App">
      <header className="App-header">
        <Form addTodos={addTodos} />
        <TodoList todos={todos} completedTodo={completedTodo} deleteToto={deleteToto}/>
      </header>
    </div>
  );
}

export default App;
