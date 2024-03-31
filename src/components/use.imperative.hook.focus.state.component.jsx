import React, { useRef } from "react";
import { ForwardingRefInput } from "./forwarding.ref.input.component";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";
import { ForwardingImperativeRefInput } from "./forwarding.ref.imperative.input.component";
import { ForwardingImperativeRefState } from "./forwarding.ref.imperative.state.component";


/**react-design-patterns-app - version 14.07 - UseWithImperativeFocusStatePattern
 * - Features: 
 * 
 *     --> Building 'UseWithImperativeFocusStatePattern' 
 * 
 * Note: 'UseWithImperativeFocusStatePattern' is the refactor that 
 * will use 'useImperativeHandle' to focus and capture the user 
 * entry ( limiting access to that user entry state )
 */

const UseWithImperativeFocusStatePattern = () => {

    
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        
        return console.log(" this is the imperative user entry ==>", inputRef.current.value) 
    }

    return (
        <FormWrapper>
            <form>
            <ForwardingImperativeRefState type="text" ref={inputRef}/>
            <ButtonGeneral>
                <button type="submit" onClick={submitHandler} className="button">
                    Focus on user Entry
                </button>
            </ButtonGeneral>
            </form>
        </FormWrapper>
    );
}

export default UseWithImperativeFocusStatePattern;