import React, { useEffect, useRef, useState } from "react";
import { ButtonGeneral, ToolTipWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 10.13 - TopUseLayoutEffect
 * - Features: 
 * 
 *     --> Renaming component to 'TopUseEffect'.	
 * 
 * Note: this component has an issue related with the lag rendering
 */

const TopUseEffect = () => {

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
    <ButtonGeneral>
      <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
        Show
      </button>
    </ButtonGeneral>
      {show && (
        <ToolTipWrapper top={top}>
            Some text ...    
        </ToolTipWrapper>
      )}
    </>
  );
}

export default TopUseEffect;
      