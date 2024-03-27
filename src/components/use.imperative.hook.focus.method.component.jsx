import React, { useRef } from "react";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";
import { ForwardingImperativeRefInput } from "./forwarding.ref.imperative.input.component";
import { ForwardingImperativeFocusRefInput } from "./forwarding.ref.imperative.focus.input.component";

/**react-design-patterns-app - version 13.18 - UseWithImperativeFocusMethodHookPattern
 * - Features: 
 * 
 *     --> Building 'UseWithImperativeFocusMethodHookPattern' 
 * 
 * Note: 'UseWithImperativeFocusMethodHookPattern' is the refactor that 
 * will use 'useImperativeHandle' in the 'ForwardingImperativeRefInput'
 * sub component to limit access to a focus method as a ref
 */

const UseWithImperativeFocusMethodHookPattern = () => {

    
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        

        return inputRef.current.stayFocus()
    }

    return (
        <FormWrapper>
            <form onSubmit={submitHandler}>
            <ForwardingImperativeFocusRefInput ref={inputRef} />
            <ButtonGeneral>
                <button type="submit" onClick={submitHandler} className="button">
                    Submit
                </button>
            </ButtonGeneral>
            </form>
        </FormWrapper>
    );
}

export default UseWithImperativeFocusMethodHookPattern;