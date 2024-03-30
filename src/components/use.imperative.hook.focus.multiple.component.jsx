import React, { useRef } from "react";
import { ButtonGeneral, ButtonWrapper, FormWrapper } from "../styledcomponents/styled.components";
import { ForwardingImperativeMultipleFocus } from "./forwarding.ref.imperative.multiple.input.component";

/**react-design-patterns-app - version 14.06 - UseImperativeMultipleFocus
 * - Features: 
 * 
 *     --> Wrapping using multiple 'ButtonGeneral' 
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

            <ButtonWrapper>
                <ButtonGeneral>
                    <button type="submit" onClick={submitFocus} className="button">
                        Focus to 1
                    </button>
                </ButtonGeneral>
                <ButtonGeneral>
                    <button type="submit" onClick={submitFocus2} className="button">
                        Focus to 2 
                    </button>
                </ButtonGeneral>
            </ButtonWrapper>
            </form>
        </FormWrapper>
    );
}

export default UseImperativeMultipleFocus;