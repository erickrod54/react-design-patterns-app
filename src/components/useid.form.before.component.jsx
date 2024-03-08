import { useState } from "react";
import { FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 11.06 - UseIdBeforeForm
 * - Features: 
 * 
 *     --> Wrapping using 'FormWrapper'  
 * 
 * Note: this component 'UseIdBeforeForm' will be the form 
 * before the refactoring to implement a 'useId' hook 
 * pattern
 */

const UseIdBeforeForm = () => {
    
  const [email, setEmail] = useState("");
  return (
    <FormWrapper>
    <div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    </FormWrapper>
  );
};

export default UseIdBeforeForm;