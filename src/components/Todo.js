import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
export default function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [doneCount, setDoneCount] = useState(0);
  const [color, setColor] = useState("");

  function Addtask() {
    if (task !== "") {
      let newList = [...list];
      let maxId = list.length ? Math.max(...newList.map((o) => o.id)) : 0;
      let newTask = {
        name: task,
        id: maxId + 1,
        background: color,
      };
      newList.push(newTask);
      setList(newList);
      //once the list is rendered, keep the input space empty
      setTask("");
    }
  }
  function updateDoneCount(number) {
    setDoneCount(doneCount + number);
  }
  //as we can't directly modify the list we create a copy. then map all the array. obj corresponds to each iteration.
  //we want to render a list with the names that are not the same that the ones clicked, so tasks not done yet.
  function functionRemove(todoItemName, isToggled) {
    console.log(todoItemName);
    let allList = [...list];
    allList = allList.filter((obj) => {
      return obj.name !== todoItemName;
    });
    //update de count when toggled. otherwise we get negative numbers when it should be 0. if toggle is true, minus 1 task
    if (isToggled) {
      updateDoneCount(-1);
    }

    setList(allList);
  }
  function functionDuplicate(todoItemName) {
    console.log(todoItemName);
    let newList = [...list];
    let maxId = list.length ? Math.max(...newList.map((o) => o.id)) : 0;
    let newTask = {
      name: todoItemName,
      id: maxId + 1,
      background: color,
    };
    newList.push(newTask);
    setList(newList);
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
        <option value="">select priority</option>
        <option id="priority" value="#86f386">
          Priority
        </option>
        <option id="important" value="#f1be5d">
          important
        </option>
        <option id="inmind" value="#8dbdbd">
          Keep in mind
        </option>
      </select>

      <div>
        {list.map((item) => (
          <TodoItem
            key={item.id}
            todoItemName={item.name}
            background={item.background}
            callbackUpdateCount={updateDoneCount}
            callbackRemove={functionRemove}
            callbackDuplicate={functionDuplicate}
          ></TodoItem>
        ))}
      </div>
      <div>To be done: {list.length - doneCount}</div>
    </div>
  );
}
