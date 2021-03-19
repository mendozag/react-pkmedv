import React, { useState, useEffect } from "react";
import NavbarComponent from "./Navbar";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Haz hecho clic: ", count, " veces");
  });

  return (
    <div>
      <h1>Counter</h1>
      <p>Haz hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Counter;
