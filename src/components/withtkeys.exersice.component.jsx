import React, { useState } from "react";
import { Counter } from "./index.components";
import { KeyExerciseWrapper, PrimaryButton } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 9.18 - WithKeysExercise 
 * - Features: 
 * 
 *     --> Building 'WithtKeysExercise' to add keys
 * 
 * Note: This is the first topic
 */

const WithtKeysExercise = () => {

  const [changeShirts, setChangeShirts] = useState(false);

  return (
    <KeyExerciseWrapper>
      {changeShirts ? (
        <>
          <span >Shirts counts: </span> <Counter key="shirts"/>{" "}
        </>
      ) : (
        <>
          <span >Shoes counts: </span> <Counter  key="shoes"/>{" "}
        </>
      )}
      <br />
        <PrimaryButton>
            <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
        </PrimaryButton>
    </KeyExerciseWrapper>
  );
}

export default WithtKeysExercise;