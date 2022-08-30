import React from "react";
import { useState } from "react";

export default function Home() {
  function handleOnChange(event) {
    console.log("Text was modified");
    setText(event.target.value);
  }
  function handleOnChange1(event) {
    console.log("Text was modified");
    setText1(event.target.value);
  }

  function handleClear() {
    setText("");
    setText1("");
  }

  function handleAddTask() {
    let todo_list = document.querySelector(".todo-list");
    let list_item = document.createElement("li");
    list_item.className = "list-group-item";
    list_item.innerText = text + " - " + text1;
    todo_list.appendChild(list_item);
  }

  function handleRemoveTask() {
    let todo_list = document.querySelector(".todo-list");
    todo_list.removeChild(todo_list.firstElementChild);
  }

  const [text, setText] = useState("Enter task here");
  const [text1, setText1] = useState("Enter deadline here");

  return (
    <div className="container my-5">
      <h1 className="fs-1">Task Manager</h1>
      <textarea
        className="form-control my-4"
        id="myBox"
        rows="3"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <textarea
        className="form-control my-4"
        id="myBox"
        rows="1"
        value={text1}
        onChange={handleOnChange1}
      ></textarea>
      <button className="btn btn-primary mx-2" onClick={handleAddTask}>
        Add Task
      </button>
      <button className="btn btn-primary mx-2" onClick={handleRemoveTask}>
        Remove Oldest Task
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>
        Clear Text
      </button>
      <h1 className="fs-1 my-5">To-Do List</h1>
      <ul className="list-group todo-list"></ul>
    </div>
  );
}
