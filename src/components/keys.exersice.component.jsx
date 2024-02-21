import React, { useState } from "react";
import { Counter } from "./index.components";


/**react-design-patterns-app - version 9.06 - KeysExercise 
 * - Features: 
 * 
 *     --> Building 'KeysExercise'
 * 
 * Note: This is the first topic
 */

const KeysExercise = () => {

  const [changeShirts, setChangeShirts] = useState(false);

  return (
    <div>
      {changeShirts ? (
        <>
          <span>Shirts counts: </span> <Counter />{" "}
        </>
      ) : (
        <>
          <span>Shoes counts: </span> <Counter />{" "}
        </>
      )}
      <br />
      <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
}

export default KeysExercise;