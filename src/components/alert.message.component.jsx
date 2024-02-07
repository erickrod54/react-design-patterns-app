import React, { useState } from "react";
import Alert from "./alert.component";
import { AlertWrapper, ButtonGeneral } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 7.11 - AlertMessage
 * - Features: 
 * 
 *     --> Writting a new children message 
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

const AlertMessage = () => {
    
    const [show, setShow] = useState(false);
    
    return (
      <AlertWrapper>
        <h1>Other Content</h1>
        <ButtonGeneral>
          <button 
            onClick={() => setShow(!show)}
            >{show ?  'Click it to close.' : 'Show Message'}
          </button>
        </ButtonGeneral>
        <Alert show={show} onClose={() => setShow(false)}>
          A sample message to show. <span className="dissapear"> ( Click me to dissappear ) </span>
        </Alert>
      </AlertWrapper>
    );

}

export default AlertMessage;

