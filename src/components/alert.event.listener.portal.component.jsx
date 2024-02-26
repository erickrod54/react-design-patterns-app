import React from "react";
import { ModalBackground, ModalContent } from "../styledcomponents/styled.components";
import { createPortal } from "react-dom";

/**react-design-patterns-app - version 10.00 - AlertPortalEventListener
 * - Features: 
 * 
 *     --> Building 'AlertPortalEventListener'
 * 
 * Note: This is a modal pattern to show the 
 * portal functionality
 */

const AlertPortalEventListener = ({ children, onClose, show }) => {
    if (!show) return;
  
    return createPortal(
        <ModalBackground onClick={() => console.log("Inner div")}>
          <ModalContent>
            <div className="alert" onClick={onClose}>
              {children}
            </div>
          </ModalContent>
        </ModalBackground>,
        document.body
    );
  };

  export default AlertPortalEventListener;