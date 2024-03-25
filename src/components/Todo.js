import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
export default function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [doneCount, setDoneCount] = useState(0);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const items = [
      {
        name: "meeting",
        id: 0,
        background: "grey",
      },
      {
        name: "gym",
        id: 1,
        background: "grey",
      },
    ];
    setList(items);
  }, []);
  function Addtask() {
    if (task !== "") {
      let newList = [...list];
      let maxId = Math.max(...newList.map((o) => o.id));
      let newTask = {
        name: task,
        id: maxId + 1,
        background: color,
      };
      newList.push(newTask);
      setList(newList);
      console.log(newList.length);
      setTask("");
    }
  }
  function updateDoneCount(number) {
    setDoneCount(doneCount + number);
  }
  //let length = list.length;

  return (
    <div>
      <h1>To do list:</h1>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        onKeyDown={(e) => {
          if (e.key === "Enter") Addtask();
        }}
      ></input>
      <button className="addbtn" onClick={Addtask}>
        Add
      </button>

      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option id="priority" value="green">
          Priority
        </option>
        <option id="important" value="orange">
          important
        </option>
        <option id="inmind" value="blue">
          Keep in mind
        </option>
      </select>

      <div>
        {list.map((item, index) => (
          <TodoItem
            todoItemName={item.name}
            background={item.background}
            callback={updateDoneCount}
          ></TodoItem>
        ))}
      </div>
      <div>To be done: {list.length - doneCount}</div>
    </div>
  );
}
