import { useState } from "react";
import { ButtonGeneral, ButtonWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 9.09 - Counter 
 * - Features: 
 * 
 *     --> Refactoring component styles for 'Counter'
 * 
 * Note: This is the first topic
 */

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <ButtonWrapper>
        <ButtonGeneral>
            <button onClick={() => setCount((c) => c - 1)}>-</button>
        </ButtonGeneral>
        <div className="number-center">
            {count}
        </div>
        <ButtonGeneral>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
        </ButtonGeneral>
    </ButtonWrapper>
  );
};

export default Counter;