import React, { useState } from "react";
import { Counter } from "./index.components";
import { KeyExerciseWrapper, PrimaryButton } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 9.10 - KeysExercise 
 * - Features: 
 * 
 *     --> Importing 'KeyExerciseWrapper'
 * 
 * Note: This is the first topic
 */

const KeysExercise = () => {

  const [changeShirts, setChangeShirts] = useState(false);

  return (
    <KeyExerciseWrapper>
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
    </KeyExerciseWrapper>
  );
}

export default KeysExercise;