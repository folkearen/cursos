//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import{TodoList} from './TodoList'
import { CrateTodoButton } from "./CreateTodoButton";
const toDos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar curso Ract', completed: false},
  {text: 'Estudiar ingles', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <input placeholder="Cabolla" />
      <TodoList>
        {toDos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CrateTodoButton />
    </React.Fragment>
  );
}

export default App;
