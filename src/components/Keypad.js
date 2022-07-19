import React from "react";

function Keypad() {
  function handleChanges() {
    console.log("Entering password...");
  }
  return <input type="password" onChange={handleChanges} />;
}
export default Keypad;
