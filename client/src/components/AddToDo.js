import React from "react";
import { CgAddR } from "react-icons/cg";

const AddToDo = ({ text, setText, todos, setTodos }) => {
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: text, id: Math.random() * 1000 }]);
    setText("");
  };

  const inputTextHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <form className="todos-form" onSubmit={submitTodoHandler}>
        <CgAddR onClick={submitTodoHandler} />

        <label className="todo-label">
          Todo:
          <input
            className="todo-desc"
            type="text"
            value={text}
            onChange={inputTextHandler}
          />
        </label>
      </form>
    </>
  );
};

export default AddToDo;
