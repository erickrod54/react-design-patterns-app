import React, { useState } from "react";
import { AlertWrapper, ButtonGeneral } from "../styledcomponents/styled.components";
import { AlertPortal } from "./index.components";
import AlertPortalEventListener from "./alert.event.listener.portal.component";

/**react-design-patterns-app - version 10.00 - AlertMessageWithEventListener
 * - Features: 
 * 
 *     --> Building 'AlertMessageWithEventListener' 
 * 
 * Note: This is the portal subcomponent call
 */

const AlertMessageWithEventListener = () => {
    
    const [show, setShow] = useState(false);
    
    return (
      <AlertWrapper onClick={() => console.log("Outter div")}>
        <h1>Other Content for the Portal</h1>
        <ButtonGeneral>
          <button 
            onClick={() => setShow(!show)}
            >{show ?  'Click it to close.' : 'Show Message'}
          </button>
        </ButtonGeneral>
        <AlertPortalEventListener show={show} onClose={() => setShow(false)}>
          A sample message to show from portal to <span className="portal-end"> document.body </span>. <span className="dissapear"> ( Click me to dissappear ) </span>
        </AlertPortalEventListener>
      </AlertWrapper>
    );

}

export default AlertMessageWithEventListener;