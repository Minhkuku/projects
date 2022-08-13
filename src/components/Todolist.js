import React, { memo } from "react";
import Todo from "./Todo.js";
function Todolist({ todolist, handCompleted }) {
  return (
    <div className="container-jobs">
      {todolist.map((todo) => (
        <Todo key={todo.id} todo={todo} handCompleted={handCompleted} />
      ))}
    </div>
  );
}
export default memo(Todolist);
