import { useState } from "react";

/**react-design-patterns-app - version 9.06 - Counter 
 * - Features: 
 * 
 *     --> Building 'Counter'
 * 
 * Note: This is the first topic
 */

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
};

export default Counter;