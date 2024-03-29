import React, { useRef } from "react";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";
import { ForwardingImperativeMultipleFocus } from "./forwarding.ref.imperative.multiple.input.component";

/**react-design-patterns-app - version 14.02 - UseImperativeMultipleFocus
 * - Features: 
 * 
 *     --> Building 'UseImperativeMultipleFocus' 
 * 
 * Note: 'UseImperativeMultipleFocus' is the refactor that 
 * will use 'useImperativeHandle' in the 'ForwardingImperativeRefInput'
 * sub component to limit access to a focus method as a ref
 */

const UseImperativeMultipleFocus = () => {

    
    const inputRef = useRef();

    const submitFocus = (e) => {
        e.preventDefault();
        

        return inputRef.current.input1.focus()
    }

    const submitFocus2 = (e) => {
        e.preventDefault();
        

        return inputRef.current.input2.focus()
    }

    return (
        <FormWrapper>
            <form >
            <ForwardingImperativeMultipleFocus ref={inputRef} />
            <ButtonGeneral>
                <button type="submit" onClick={submitFocus} className="button">
                    Focus to 1
                </button>
                <button type="submit" onClick={submitFocus2} className="button">
                    Focus to 2 
                </button>
            </ButtonGeneral>
            </form>
        </FormWrapper>
    );
}

export default UseImperativeMultipleFocus;