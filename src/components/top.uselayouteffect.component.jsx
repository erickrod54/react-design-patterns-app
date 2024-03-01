import React, { useEffect, useRef, useState } from "react";
import { ToolTipWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 10.09 - TopUseLayoutEffect
 * - Features: 
 * 
 *     --> Building 'TopUseLayoutEffect' Component.	
 * 
 * Note: this component has an issue related with the lag rendering
 */

const TopUseLayoutEffect = () => {

    const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current === null || !show) return setTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setTop(bottom + 30);
  }, [show]);

  const now = performance.now();
  while (now > performance.now() - 200) {
    //Do something
  }

  return (
    <>
      <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
        Show
      </button>
      {show && (
        <ToolTipWrapper top={top}>
            Some text ...    
        </ToolTipWrapper>
      )}
    </>
  );
}

export default TopUseLayoutEffect;
      