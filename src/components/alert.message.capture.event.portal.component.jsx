import React, { useState } from "react";
import { AlertWrapper, ButtonGeneral } from "../styledcomponents/styled.components";
import AlertPortalEventCapture from "./alert.capture.event.portal.component";

/**react-design-patterns-app - version 10.04 - AlertMessageWithEventCapture
 * - Features: 
 * 
 *     --> Building 'AlertMessageWithEventCapture'
 * 
 * Note: This is the portal subcomponent call
 */

const AlertMessageWithEventCapture = () => {
    
    const [show, setShow] = useState(false);
    
    return (
      <AlertWrapper onClickCapture={() => console.log("Outter div")}>
        <h1>Other Content for the Portal ( Check the Java Console for the "Outter div")</h1>
        <ButtonGeneral>
          <button 
            onClick={() => setShow(!show)}
            >{show ?  'Click it to close.' : 'Show Message'}
          </button>
        </ButtonGeneral>
        <AlertPortalEventCapture show={show} onClose={() => setShow(false)}>
            A sample message <span className="portal-end"> ( Click me to dissappear - Check the Java Console for "Inner div" ) </span>
        </AlertPortalEventCapture>
      </AlertWrapper>
    );

}

export default AlertMessageWithEventCapture;