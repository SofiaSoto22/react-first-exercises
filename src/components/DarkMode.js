import { useState } from "react";

export default function DarkModeButton() {
  const [Mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!Mode);
  };
  function Switch() {}
  return (
    <body
      style={{
        backgroundColor: Mode ? "black" : "white",
        color: Mode ? "white" : "black",
      }}
    >
      <button
        onClick={handleMode}
        style={{
          borderRadius: "10px",
          color: "darkblue",
          fontWeight: "bold",
        }}
      >
        Switch to dark mode
      </button>
    </body>
  );
}
