import React, { useState } from "react";
import Alert from "./alert.component";
import { AlertWrapper, ButtonGeneral } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 5.16 - AlertMessage
 * - Features: 
 * 
 *     --> Developing 'AlertMessage' exersice 
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
          A sample message to show.
        </Alert>
      </AlertWrapper>
    );

}

export default AlertMessage;

