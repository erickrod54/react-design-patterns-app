import { useState } from "react";
import { FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 11.10 - UseIdAfterMathForm
 * - Features: 
 * 
 *     --> Building 'UseIdAfterMathForm'  
 * 
 * Note: this component 'UseIdAfterMathForm' is a 
 * bad practice use commonly in codebases before 
 * 'useId' exists
 */

const UseIdAfterMathForm = () => {
    
  const [email, setEmail] = useState("");

  /**this line will gemnerate an unique id */
  const id = Math.random();

  /**i apply the id in each label and input to make it unique */
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
    </div>
    </FormWrapper>
  );
};

export default UseIdAfterMathForm;