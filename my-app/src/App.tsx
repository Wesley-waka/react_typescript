import React from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";
const App: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // console.log(text);
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} todoDeleteHandler={todoDeleteHandler} />
    </div>
  );
};

export default App;
