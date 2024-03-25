import React, { useEffect, useState } from "react";
export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p>{isToggled ? "ON" : "OFF"}</p>
    </div>
  );
}
