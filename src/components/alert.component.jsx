import React from "react";

/**react-design-patterns-app - version 5.16 - Alert
 * - Features: 
 * 
 *     --> Developing 'Alert' exersice 
 * 
 * Note: This is a modal pattern to show the 
 * portal functionality
 */

const Alert = ({ children, onClose, show }) => {
    if (!show) return;
  
    return (
      <div className="alert" onClick={onClose}>
        {children}
      </div>
    );
  };

  export default Alert;