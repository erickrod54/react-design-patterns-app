import React, { useState } from "react";
import { Counter } from "./index.components";
import { PrimaryButton } from "../styledcomponents/styled.components.index";


/**react-design-patterns-app - version 9.09 - KeysExercise 
 * - Features: 
 * 
 *     --> Importing 'PrimaryButton'
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
        <PrimaryButton>
            <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
        </PrimaryButton>
    </div>
  );
}

export default KeysExercise;