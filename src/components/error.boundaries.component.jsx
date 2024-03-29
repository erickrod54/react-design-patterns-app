import React, { useState } from "react";
import { ButtonGeneral, CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import { BashCode, CustomTitle } from "./index.components";
import MasterComponent from "./error.boundaries.parent.component";
import { usePatternsAppContext } from "../context";
import MasterWithErrorComponent from "./error.boundaries.parentwerror.component";
import { ErrorBoundary } from './error.boundary.class.component'

/**react-design-patterns-app - version 9.01 - ErrorBoundaries
 * - Features: 
 * 
 *     --> Adiing 'componentdidcatch' code 
 * 
 * Note: by rendering 'MasterWithErrorComponent' i can see 
 * the cascade error resulting on the child component and 
 * the master component
 */

const ErrorBoundaries = () => {

    const { CodeData } = usePatternsAppContext();

    const [ displayMaster, setDisplayMaster ] = useState(false);
    const [ displayMasterFallback, setDisplayMasterFallback ] = useState(false);

    const handleMasterFallback = () => {
        setDisplayMasterFallback(!displayMasterFallback)
    }
    
    const handleMaster = () => {
        setDisplayMaster(!displayMaster)
    }

    const mastercomponentcode = CodeData[67].code;
    const childcomponentcode = CodeData[68].code;
    const errorboundarycode = CodeData[69].code;
    const errorboundaryclasscode = CodeData[70].code;
    const componentdidcatch = CodeData[71].code;

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
                so let's say i have a parent component named <span className="text-white font-semibold"> MasterComponent </span> and its child component named 
                as <span className="text-white font-semibold"> ChildComponent </span>, as follows:
            </p>

            <BashCode code={mastercomponentcode}/>

            <p>
                and the <span className="text-white font-semibold"> Child component </span> as follows:
            </p>

            <BashCode code={childcomponentcode}/>

            <p>
                rendering in the <span className="text-white font-semibold"> MasterComponent </span> component as follows:
            </p>

            <MasterComponent />

            <p>
                so the behavior expected <span className="text-white font-semibold"> Child component </span> crash by an error
                in the scope of this component will make crash the <span className="text-white font-semibold"> master component 
                </span> ( because one <span className="text-white font-semibold"> scope - </span> child - is being scopped 
                by the parent <span className="text-white font-semibold"> - master component - </span>), by uncommenting the error
                line the result will be: 
            </p>

            <ButtonGeneral>
                <button onClick={handleMaster}> display master component ( this error will crash the application, refresh the page )</button>
            </ButtonGeneral>
        

            {displayMaster ?
                <MasterWithErrorComponent /> 
            :   
            <>
            </>
            }

            <p>
                this time by applying the <span className="text-white font-semibold"> error boundary </span> i can get 
                <span className="text-white font-semibold"> one of two results </span> or <span className="text-white font-semibold"> 
                a warning and eventually render the boundary fallback </span> or <span className="text-white font-semibold"> directly render 
                the error boundary fallback </span>, so what ever is the result expected the app won't crash make in it posible to debbug 
                and resolve in a better way the error, resulting the code as follows:
            </p>

            <BashCode code={errorboundarycode}/>

            <p>
                and the error boundary component is a class component because this way i can set boundaries at react tree level, and 
                implement lifecycle methods to avoid an entire app crash 
            </p>
            
            <BashCode code={errorboundaryclasscode}/>

            <p>
                let's also check the <span className="text-white font-semibold"> lifecycle </span> implemented to catch the error giving 
                an opportunity to <span className="text-white font-semibold"> record this error in an API or send it to other multiple 
                sources </span>, or <span className="text-white font-semibold"> simply separating this error of sync and async errors </span>, 
                because this error that is being handled using the ErrorBoundary and <span className="text-white font-semibold"> it is strictly 
                related with the react tree rendering </span>
            </p>
            
            <BashCode code={componentdidcatch}/>

            <p>
                now let's try it with the error boundary:
            </p>

            <ButtonGeneral>
                <button onClick={handleMasterFallback}> display master component ( will be a warning or a fallback directly render )</button>
            </ButtonGeneral>

            {displayMasterFallback ?
            <ErrorBoundary fallback={<h1>Error at App Level</h1>}>
                <MasterWithErrorComponent /> 
            </ErrorBoundary>
            :   
            <>
            </>
            }

            <p>
                so the way that this <span className="text-white font-semibold"> cascade error </span> is handled is by using 
                <span className="text-white font-semibold"> error boundaries </span>
            </p>

            </SectionWrapper>
        </div>

    )
}

export default ErrorBoundaries;