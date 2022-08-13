import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState, useCallback, useEffect } from "react";
import Todolist from "./components/Todolist";
import { v4 } from "uuid";
function App() {
  const [todolist, setTodolist] = useState(() => {
    return JSON.parse(localStorage.getItem("list")) || [];
  });
  const [valueInput, setValueInput] = useState("");
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todolist));
  }, [todolist]);
  const handleTodolist = () => {
    setTodolist((prev) => [
      ...prev,
      { id: v4(), name: valueInput, isCompleted: false },
    ]);
    setValueInput("");
  };
  const handCompleted = useCallback((id) => {
    setTodolist((prevTodolist) =>
      prevTodolist.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);
  const handleValueInput = (e) => {
    setValueInput(e.target.value);
  };
  return (
    <main>
      <h3>Danh sách cần làm</h3>
      <div className="form-add">
        <input
          value={valueInput}
          placeholder="Nhập việc cần làm..."
          className="form-control"
          onChange={handleValueInput}
        ></input>
        <button
          disabled={!valueInput}
          className="btn-add-job"
          onClick={handleTodolist}
        >
          Thêm
        </button>
      </div>
      <Todolist todolist={todolist} handCompleted={handCompleted} />
      <button className="btn-delete" onClick={() => setTodolist([])}>
        Delete all
      </button>
    </main>
  );
}

export default App;
