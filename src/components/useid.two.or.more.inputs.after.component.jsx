import { useId, useState } from "react";
import { FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 12.01 - UseIdAfterTwoOrMoreInputs
 * - Features: 
 * 
 *     --> Building 'UseIdAfterTwoOrMoreInputs'  
 * 
 * Note: this component 'UseIdAfterTwoOrMoreInputs' is
 * a first version not than cleaner, in order to set 
 * unique 'id's' to every input 
 */

const UseIdAfterTwoOrMoreInputs = () => {

  const id = useId();  
  const id2 = useId();  
    
  const [email, setEmail] = useState("");
  return (
    <FormWrapper>
    <div>
      <label htmlFor={id}>Email</label>
      <input
        id={id}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

    <label htmlFor={id}>Name</label>
    <input
        id={id2}
        type="text"
      />

    </div>
    </FormWrapper>
  );
};

export default UseIdAfterTwoOrMoreInputs;