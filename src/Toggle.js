import React, { useState, useContext } from "react";
import { UserContext } from "./App";

export default () => {
  const [isToggled, setToggle] = useState(false);
  const userInfo = useContext(UserContext);
  console.log(userInfo);
  if (!userInfo.user) return null;

  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello!</h2>}
    </div>
  );
};
