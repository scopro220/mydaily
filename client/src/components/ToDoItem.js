import React from "react";
import { CgTrash } from "react-icons/cg";
import { MdDone } from "react-icons/md";

const ToDoItem = ({ description, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <>
      <li className="todo">
        <p className={`todo-desc ${todo.completed ? "completed" : ""}`}>
          {description}
        </p>
        <CgTrash onClick={deleteHandler} />
        <MdDone onClick={completeHandler} />
      </li>
    </>
  );
};

export default ToDoItem;
