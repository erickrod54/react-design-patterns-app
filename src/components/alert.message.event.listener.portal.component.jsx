import React, { useState } from "react";
import { AlertWrapper, ButtonGeneral } from "../styledcomponents/styled.components";
import { AlertPortal } from "./index.components";
import AlertPortalEventListener from "./alert.event.listener.portal.component";

/**react-design-patterns-app - version 10.03 - AlertMessageWithEventListener
 * - Features: 
 * 
 *     --> Changing 'AlertPortalEventListener' children
 * 
 * Note: This is the portal subcomponent call
 */

const AlertMessageWithEventListener = () => {
    
    const [show, setShow] = useState(false);
    
    return (
      <AlertWrapper onClick={() => console.log("Outter div")}>
        <h1>Other Content for the Portal ( Check the Java Console for the "Outter div")</h1>
        <ButtonGeneral>
          <button 
            onClick={() => setShow(!show)}
            >{show ?  'Click it to close.' : 'Show Message'}
          </button>
        </ButtonGeneral>
        <AlertPortalEventListener show={show} onClose={() => setShow(false)}>
            A sample message <span className="portal-end"> ( Click me to dissappear - Check the Java Console for "Inner div" ) </span>
        </AlertPortalEventListener>
      </AlertWrapper>
    );

}

export default AlertMessageWithEventListener;