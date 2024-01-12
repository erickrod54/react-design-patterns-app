import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";

/**react-design-patterns-app - version 4.13 - FunctionalProgramming
 * - Features: 
 * 
 *     --> Building 'FunctionalProgramming'.
 * 
 * Note: this end component will handle the props destructuring and 
 * rendering
 */

const FunctionalProgramming = () => {

    return(
        <div>
        <CustomTitleStyle>
            <CustomTitle  title={<p className="functional-programming"><span >Functional Programming </span></p>} />
        </CustomTitleStyle>

        <SectionWrapper>
            <p>
                functional programming has use cases related with the patterns 
                previously, Controlled Components, Functional Components, HOC's,
                Recursive Components, Partial Components, Composition
            </p>

            <p>
                this functional programming paradigm paradigm is entirely focused
                React stack and their      
            </p>
        </SectionWrapper>
        </div>
    )
}

export default FunctionalProgramming;