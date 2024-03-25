import React, { useRef } from "react";
import { ForwardingRefInput } from "./forwarding.ref.input.component";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";


/**react-design-patterns-app - version 13.11 - UseImperativeHookPattern
 * - Features: 
 * 
 *     --> Refactor with styles 
 * 
 * Note: This component is going to be use to test limit 
 * access using 'useImperativeHandle' Hook Pattern when
 * using  refs
 */

const UseImperativeFocusHookPattern = () => {

    
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        return inputRef.current.focus()
    }

    return (
        <FormWrapper>
            <form onSubmit={submitHandler}>
            <ForwardingRefInput ref={inputRef} />
            <ButtonGeneral>
                <button type="submit" onClick={submitHandler} className="button">
                    Submit
                </button>
            </ButtonGeneral>
            </form>
        </FormWrapper>
    );
}

export default UseImperativeFocusHookPattern;