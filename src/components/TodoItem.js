import { useState } from "react";
export default function TodoItem({ todoItemName, background, callback }) {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    if (isToggled) {
      callback(-1);
    } else {
      callback(1);
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
    </div>
  );
}
