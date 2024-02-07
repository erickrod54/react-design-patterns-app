import React from "react";
import { ModalBackground, ModalContent } from "../styledcomponents/styled.components";
import { createPortal } from "react-dom";

/**react-design-patterns-app - version 7.14 - AlertPortal
 * - Features: 
 * 
 *     --> Refactoring 'AlertPortal' and rehusing Modal Component
 * 
 * Note: This is a modal pattern to show the 
 * portal functionality
 */

const AlertPortal = ({ children, onClose, show }) => {
    if (!show) return;
  
    return createPortal(
        <ModalBackground>
          <ModalContent>
            <div className="alert" onClick={onClose}>
              {children}
            </div>
          </ModalContent>
        </ModalBackground>,
        document.body
    );
  };

  export default AlertPortal;