import { useState } from "react";

export default function TodoItem({
  todoItemName,
  background,
  callbackUpdateCount,
  callbackRemove,
  callbackDuplicate,
}) {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    if (isToggled) {
      callbackUpdateCount(-1);
    } else {
      callbackUpdateCount(1);
    }
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <span
        style={{
          color: isToggled ? "grey" : "black",
          textDecoration: isToggled ? "line-through" : "none",
          backgroundColor: isToggled ? "white" : background,
        }}
      >
        {todoItemName}
      </span>
      <button onClick={() => callbackRemove(todoItemName, isToggled)}>
        Remove
      </button>
      <button onClick={() => callbackDuplicate(todoItemName)}>Duplicate</button>
    </div>
  );
}
