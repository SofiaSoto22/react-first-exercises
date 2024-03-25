import { useState } from "react";
import Todo from "./components/Todo.js";
import Counter from "./components/Counter.js";

export default function App() {
  const [Mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!Mode);
  };
  return (
    <div
      style={{
        width: "97vw",
        height: "97vh",
        backgroundColor: Mode ? "black" : "white",
        color: Mode ? "white" : "black",
      }}
    >
      <Todo></Todo>
      <button className="darkModeBttn" onClick={handleMode}>
        Switch to dark mode
      </button>
    </div>
  );
}
