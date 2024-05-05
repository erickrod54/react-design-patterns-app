import React from "react";
import { useCartContext } from "./optimize.context.api.after.tsx";
import { ButtonsOptContextStyle, SingleButtonWrapper } from "../styledcomponents/styled.components.js";

/**react-design-patterns-app - version 18.09 - ButtonsAfter
 * - Features: 
 * 
 *     --> Building 'ButtonsAfter' Component 
 *
 * Note: essentially the refactor will be the import 
 * because now is comming from the optimize context 
 * files
*/

const ButtonsAfter = () => {
  const { dispatch } = useCartContext();
  return (
    <ButtonsOptContextStyle >
      <SingleButtonWrapper
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        ➖
      </SingleButtonWrapper>
      <SingleButtonWrapper
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        ➕
      </SingleButtonWrapper>
    </ButtonsOptContextStyle>
  );
};

export default ButtonsAfter;
