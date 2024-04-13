import React from "react";
import { CoverContainer, Emoji } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 15.15 - Cover
 * - Features: 
 * 
 *     --> Adding 'Emoji' styles
 * 
 * Note: the Cover component for the useTransition 
 * pattern  
 */

const Cover = () => {
  return (
    <CoverContainer>
      <Emoji role="img" aria-label="Book Cover Emoji">
        📚
      </Emoji>
    </CoverContainer>
  );
};

export default Cover;
