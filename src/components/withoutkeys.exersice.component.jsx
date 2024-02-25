import React, { useState } from "react";
import { Counter } from "./index.components";
import { KeyExerciseWrapper, PrimaryButton } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 9.15 - WithKeysExercise 
 * - Features: 
 * 
 *     --> Refactoring 'KeyExerciseWrapper' to 'WithKeysExercise'
 * 
 * Note: This is the first topic
 */

const WithoutKeysExercise = () => {

  const [changeShirts, setChangeShirts] = useState(false);

  return (
    <KeyExerciseWrapper>
      {changeShirts ? (
        <div>
          <span >Shirts counts: </span> <Counter />{" "}
        </div>
      ) : (
        <section>
          <span >Shoes counts: </span> <Counter />{" "}
        </section>
      )}
      <br />
        <PrimaryButton>
            <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
        </PrimaryButton>
    </KeyExerciseWrapper>
  );
}

export default WithoutKeysExercise;