import React from "react";
import "./NewTodo.css";
import TodoList from "./TodoList";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}
const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = React.useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    // console.log(enteredText);
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text"></label>
        <input type="text" id="todo-text" ref={textInputRef} />
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  );
};

export default NewTodo;
