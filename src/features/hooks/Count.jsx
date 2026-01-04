import { useState } from "react";
import useConsoleLog from "../../hooks/useConsoleLog";

function Count() {
  const [count, setCount] = useState(0);
  
  useConsoleLog('Count', count);

  function increment() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  return (
    <section className="gray-box">
      <h3>Count: {count}</h3>
      <button onClick={increment}>Plus 1</button>
    </section>
  );
}

export default Count;
