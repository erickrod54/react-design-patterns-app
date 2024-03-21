import React, { useCallback, useEffect, useRef, useState } from "react";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 13.04 - CallbackAsRefAfter 
 * - Features: 
 * 
 *     --> Building 'CallbackAsRefAfter'
 * 
 * Note: Pending to make responsive design
 */

const CallbackAsRefAfter = () => {

    const [ showInput, setShowInput ] = useState(false)


    const inputRef = useCallback(( input ) => {
        /**once switch is being hit it will destroy the input, and return to the callback, 
         * and this conditional is to avoid the error*/
        if (input === null) return;
        input.focus();
    }, [])

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


export default CallbackAsRefAfter;