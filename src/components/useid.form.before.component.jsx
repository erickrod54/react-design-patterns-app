import { useState } from "react";

/**react-design-patterns-app - version 11.04 - UseIdBeforeForm
 * - Features: 
 * 
 *     --> Building 'UseIdBeforeForm'  
 * 
 * Note: this component 'UseIdBeforeForm' will be the form 
 * before the refactoring to implement a 'useId' hook 
 * pattern
 */

const UseIdBeforeForm = () => {
    
  const [email, setEmail] = useState("");
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default UseIdBeforeForm;