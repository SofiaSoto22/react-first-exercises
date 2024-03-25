import { useState } from "react";

function Button({ handleClick }) {
  return (
    <div>
      <button onClick={() => handleClick("+")}>+</button>
      <button onClick={() => handleClick("-")}>-</button>
    </div>
  );
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const updateCount = (operation) => {
    if (operation == "+") {
      setCount(count + 1);
    } else if (operation == "-") {
      setCount(count - 1);
    }
  };

  return (
    <section>
      <h1>{count}</h1>
      <Button handleClick={updateCount} />
    </section>
  );
}
