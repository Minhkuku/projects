import React from "react";
import { BsCheckLg } from "react-icons/bs";

export default function Todo({ todo, handCompleted }) {
  return (
    <button className={todo.isCompleted ? "btn-job tt hover" : "btn-job"}>
      {todo.name}
      <span onClick={() => handCompleted(todo.id)} className={"checkComplete"}>
        <BsCheckLg />
      </span>
    </button>
  );
}
