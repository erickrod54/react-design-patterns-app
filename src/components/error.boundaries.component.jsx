import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import { CustomTitle } from "./index.components";
import MasterComponent from "./error.boundaries.parent.component";

/**react-design-patterns-app - version 8.08 - ErrorBoundaries
 * - Features: 
 * 
 *     --> Developing 'ErrorBoundaries' concepts
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
                    error boundaries is a pattern that provides a mechanism that provide gracefully error 
                    handling in React applications, having as goals:
                </p>

            <ul>
                <li>
                    <span className="text-white font-semibold"> Preventing Application Crashes </span> ( no blank or error screens )
                </li>
                <li>
                    <span className="text-white font-semibold"> Improving User Experience </span> ( by handling the error the user be notified and directed for the error flow )
                </li>
                <li>
                    <span className="text-white font-semibold"> Facilitating Debugging and Maintenance </span> ( the maintainer has clues about where to start to solve the error )
                </li>
                <li>
                    <span className="text-white font-semibold"> Promoting Code Reusability </span> ( an error boundary component pattern can be use to cover multiple use cases )
                </li>
                <li>
                    <span className="text-white font-semibold"> Enhancing Application Stability </span> ( by handling error and preventing cascading failures - from parent to child 
                    components - can make the application more robust and predictable )
                </li>
            </ul>

            </SectionWrapper>
        </div>

    )
}

export default ErrorBoundaries;