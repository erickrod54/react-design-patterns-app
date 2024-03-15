import { useId, useState } from "react";
import { FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 12.07 - UseIdAfterTwoOrMoreInputs
 * - Features: 
 * 
 *     --> Building 'UseIdCleanfterTwoOrMoreInputs' 
 * 
 * Note: this component 'UseIdCleanfterTwoOrMoreInputs'
 * is the cleaner version of 'UseIdAfterTwoOrMoreInputs'
 */

const UseIdCleanAfterTwoOrMoreInputs = () => {

  const id = useId();  
    
  const [email, setEmail] = useState("");
  return (
    <FormWrapper>
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input
        id={`${id}-email`}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

    <label htmlFor={`${id}-name`}>Name</label>
    <input
        id={`${id}-name`}
        type="text"
      />

    </div>
    </FormWrapper>
  );
};

export default UseIdCleanAfterTwoOrMoreInputs;