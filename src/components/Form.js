import { useState } from "react";

export default function Form() {
  const [space, setSpace] = useState("");
  return (
    <form>
      <input value={space} onChange={(e) => setSpace(e.target.value)}></input>
      {space !== "" && <p>You are typing: {space}</p>}
    </form>
  );
}
