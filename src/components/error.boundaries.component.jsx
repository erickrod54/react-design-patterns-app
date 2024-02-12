import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import { CustomTitle } from "./index.components";

/**react-design-patterns-app - version 8.01 - ErrorBoundaries
 * - Features: 
 * 
 *     --> Building 'ErrorBoundaries'
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const ErrorBoundaries = () => {

    return(
        <div>
            <CustomTitleStyle>
                    <CustomTitle  title={<p className="error-boundaries"><span >Error Boundaries</span></p>} />
            </CustomTitleStyle>
            <SectionWrapper>
                <p>

                </p>
            </SectionWrapper>
        </div>

    )
}

export default ErrorBoundaries;