import React, { useEffect, useRef, useState } from "react";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 12.15 - CallbackAsRefBefore 
 * - Features: 
 * 
 *     --> Wrapping with 'FormWrapper' and
 *         'ButtonGeneral' style components
 * 
 * Note: Pending to make responsive design
 */

const CallbackAsRefBefore = () => {

    const [ showInput, setShowInput ] = useState(false)
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
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


export default CallbackAsRefBefore