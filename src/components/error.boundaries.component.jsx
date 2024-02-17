import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import { BashCode, CustomTitle } from "./index.components";
import MasterComponent from "./error.boundaries.parent.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 8.11 - ErrorBoundaries
 * - Features: 
 * 
 *     --> Adding 'mastercomponentcode' code
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const ErrorBoundaries = () => {

    const { CodeData } = usePatternsAppContext();

    const mastercomponentcode = CodeData[67].code;
    

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

            <p>
                <span className="text-white font-semibold"> error boundaries pattern </span> is <span className="text-white font-semibold"> 
                always implemented </span> from <span className="text-white font-semibold"> parent components </span> to a
                <span className="text-white font-semibold"> child component </span> or <span className="text-white font-semibold"> children component  
                </span>in order to make use of the <span className="text-white font-semibold"> 
                react component tree hierarchy </span> to set boundaries by the <span className="text-white font-semibold"> parent scope over the children </span>, 
                so let's say i have a parent component named <span className="text-white font-semibold"> MasterWrapper </span> and its child component named 
                as <span className="text-white font-semibold"> ChildComponent </span>, as follows:
            </p>

            <BashCode code={mastercomponentcode}/>

            <p>
                and the <span className="text-white font-semibold"> Child component </span> as follows:
            </p>

            <MasterComponent />

            </SectionWrapper>
        </div>

    )
}

export default ErrorBoundaries;