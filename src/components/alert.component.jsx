import React from "react";
import { ModalBackground, ModalContent } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 7.10 - Alert
 * - Features: 
 * 
 *     --> Refactoring 'Alert' and rehusing Modal Component
 * 
 * Note: This is a modal pattern to show the 
 * portal functionality
 */

const Alert = ({ children, onClose, show }) => {
    if (!show) return;
  
    return (
        <ModalBackground>
          <ModalContent>
            <div className="alert" onClick={onClose}>
              {children}
            </div>
          </ModalContent>
        </ModalBackground>
    );
  };

  export default Alert;