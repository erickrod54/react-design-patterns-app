import React, { useEffect, useRef, useState } from "react";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 13.02 - CallbackAsRefBefore 
 * - Features: 
 * 
 *     --> Building 'CallbackAsRefCommentedBefore'
 * 
 * Note: the 'CallbackAsRefCommentedBefore' comment the undefined
 * reference in order to render the component
 */

const CallbackAsRefCommentedBefore = () => {

    const [ showInput, setShowInput ] = useState(false)
    const inputRef = useRef(null);

    useEffect(() => {
        //inputRef.current.focus();
    }, []);

    return(
        <>
        <FormWrapper>
            <ButtonGeneral>
                <button onClick={() => setShowInput((s) => !s)}> Switch </button>
            </ButtonGeneral>
            {showInput && <input type="text" ref={inputRef} />} 
        </FormWrapper>
        </>
    )
    }


export default CallbackAsRefCommentedBefore;