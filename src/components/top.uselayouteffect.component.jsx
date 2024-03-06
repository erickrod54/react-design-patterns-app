import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ButtonGeneral, ToolTipWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 10.19 - TopUseLayoutEffect
 * - Features: 
 * 
 *     --> Building 'TopUseLayoutEffect'	
 * 
 * Note: this component has an issue related with the lag rendering
 */

const TopUseLayoutEffect = () => {

    const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    if (buttonRef.current === null || !show) return setTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setTop(bottom + 30);
  }, [show]);

  const now = performance.now();
  while (now > performance.now() - 100) {
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
        <ToolTipWrapper top={top} >
          <div className="text-color">
            Some text ...    
          </div>
        </ToolTipWrapper>
      )}
    </>
  );
}

export default TopUseLayoutEffect;
      