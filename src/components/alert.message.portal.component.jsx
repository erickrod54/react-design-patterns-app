import React, { useState } from "react";
import { AlertWrapper, ButtonGeneral } from "../styledcomponents/styled.components";
import { AlertPortal } from "./index.components";

/**react-design-patterns-app - version 7.17 - AlertMessage
 * - Features: 
 * 
 *     --> Building 'AlertMessageWithPortal' 
 * 
 * Note: This is the portal subcomponent call
 */

const AlertMessageWithPortal = () => {
    
    const [show, setShow] = useState(false);
    
    return (
      <AlertWrapper>
        <h1>Other Content for the Portal</h1>
        <ButtonGeneral>
          <button 
            onClick={() => setShow(!show)}
            >{show ?  'Click it to close.' : 'Show Message'}
          </button>
        </ButtonGeneral>
        <AlertPortal show={show} onClose={() => setShow(false)}>
          A sample message to show from portal to <span className="portal-end"> document.body </span>. <span className="dissapear"> ( Click me to dissappear ) </span>
        </AlertPortal>
      </AlertWrapper>
    );

}

export default AlertMessageWithPortal;

