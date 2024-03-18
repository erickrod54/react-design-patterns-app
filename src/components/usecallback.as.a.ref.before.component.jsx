import React, { useEffect, useRef, useState } from "react";

/**react-design-patterns-app - version 12.13 - CallbackAsRefBefore 
 * - Features: 
 * 
 *     --> Building 'CallbackAsRefBefore'
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
            <button onClick={() => setShowInput((s) => !s)}> Switch </button>
            {showInput && <input type="text" ref={inputRef} />}
        </>
    )
    }


export default CallbackAsRefBefore