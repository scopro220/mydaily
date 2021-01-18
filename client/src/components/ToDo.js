import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import AddToDo from "./AddToDo";
import ToDoItem from "./ToDoItem";

const ToDo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let localTodos = JSON.parse(localStorage.getItem("todos"));
        setTodos(localTodos);
      }
    };
    getLocalTodos();
  }, []);

  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos]);

  return (
    <>
      <SideNav />
      <section className="todos-main display">
        <AddToDo
          text={text}
          setText={setText}
          todos={todos}
          setTodos={setTodos}
        />
        <ul>
          {todos.map((todo) => (
            <ToDoItem
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              description={todo.text}
              key={todo.id}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ToDo;
