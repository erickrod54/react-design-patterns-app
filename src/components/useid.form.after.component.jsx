import { useId, useState } from "react";
import { FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 11.17 - UseIdAfterForm
 * - Features: 
 * 
 *     --> Building 'UseIdAfterForm'  
 * 
 * Note: this component 'UseIdAfterForm' will 
 * by using 'useId' hook will generate an 
 * alfanumeric id that will stay the same 
 * for every time that the component render
 */

const UseIdAfterForm = () => {

  const id = useId();  
    
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
    </div>
    </FormWrapper>
  );
};

export default UseIdAfterForm;