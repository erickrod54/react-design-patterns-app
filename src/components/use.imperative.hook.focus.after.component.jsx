import React, { useRef } from "react";
import { ForwardingRefInput } from "./forwarding.ref.input.component";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";
import { ForwardingImperativeRefInput } from "./forwarding.ref.imperative.input.component";


/**react-design-patterns-app - version 13.17 - UseImperativeHookPattern
 * - Features: 
 * 
 *     --> Building 'UseWithImperativeFocusHookPattern' 
 * 
 * Note: 'UseWithImperativeFocusHookPattern' is the refactor that 
 * will use 'useImperativeHandle' in the 'ForwardingImperativeRefInput'
 * sub component to limit access
 */

const UseWithImperativeFocusHookPattern = () => {

    
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        

        return inputRef.current.sayType()
    }

    return (
        <FormWrapper>
            <form onSubmit={submitHandler}>
            <ForwardingImperativeRefInput ref={inputRef} />
            <ButtonGeneral>
                <button type="submit" onClick={submitHandler} className="button">
                    Submit
                </button>
            </ButtonGeneral>
            </form>
        </FormWrapper>
    );
}

export default UseWithImperativeFocusHookPattern;