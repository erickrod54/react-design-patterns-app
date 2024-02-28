import React from "react";
import { ModalBackground, ModalContent } from "../styledcomponents/styled.components";
import { createPortal } from "react-dom";

/**react-design-patterns-app - version 10.04 - AlertPortalEventCapture
 * - Features: 
 * 
 *     --> Building 'AlertPortalEventCapture'
 * 
 * Note: This is a modal pattern to show the 
 * portal functionality
 */

const AlertPortalEventCapture = ({ children, onClose, show }) => {
    if (!show) return;
  
    return createPortal(
        <ModalBackground 
            onClickCapture={() => {
                onClose();
                console.log("Inner div")
            }}>
          <ModalContent>
            <div className="alert" onClick={onClose}>
              {children}
            </div>
          </ModalContent>
        </ModalBackground>,
        document.body
    );
  };

  export default AlertPortalEventCapture;