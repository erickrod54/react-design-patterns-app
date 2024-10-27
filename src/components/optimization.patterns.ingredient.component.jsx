import { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";


/**react-design-patterns-app - version 43.09 - Ingredients  
 * - Features: 
 * 
 *     --> writting  'IngredientsComponent' styles
 * 
 * Note: Pending to make responsive design
 */

const StyledContainer = styled.div`
  margin-top: 2rem;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > div > h2 {
  }
`;

const StyledHeading2 = styled.h2`
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledSpaceY4 = styled.div`
  margin-top: 1rem;

  > * + * {
    margin-top: 1rem;
  }
`;

