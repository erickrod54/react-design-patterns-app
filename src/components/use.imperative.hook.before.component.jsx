import React, { useRef } from "react";
import { ForwardingRefInput } from "./forwarding.ref.input.component";

/**react-design-patterns-app - version 13.09 - UseImperativeHookPattern
 * - Features: 
 * 
 *     --> Building 'UseImperativeHookPattern' 
 * 
 * Note: This component is going to be use to test limit 
 * access using 'useImperativeHandle' Hook Pattern when
 * using  refs
 */

const UseImperativeHookPattern = () => {

    
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(inputRef.current.value);
    }

    return (
        <form onSubmit={submitHandler}>
        <ForwardingRefInput ref={inputRef} />
        <button type="submit" className="button">
            Submit
        </button>
        </form>
    );
}

export default UseImperativeHookPattern;