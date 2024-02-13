import React, { useRef } from "react";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";
import { ForwardingRefInput } from "./forwarding.ref.input.component";


/**react-design-patterns-app - version 8.04 - ForwardingHookRefForm 
 * - Features: 
 * 
 *     --> Building 'ForwardingHookRefForm' component. 
 * 
 * Note: here i implement 'ForwardingRefInput' to get access
 * to the ref through the component
 * 
 */

const ForwardingHookRefForm = () => {

    /**here i create a ref that is giving me acces to the data */
    const  inputRef = useRef();

    /**here i create a handler to access that user data */
    const  submitHandler = (e) => {
        e.preventDefault();

        console.log(inputRef.current.value)
    }

    return(
        /**this a style component */
        <FormWrapper>
        <form onSubmit={submitHandler}>
            <span className="text-white font-semibold">
                user data ( to be access with a useRef )
            </span>
            {/**here using the reference i get access to the user data, and 
             *  this time will be access by the custom component*/}
            <ForwardingRefInput ref={inputRef}/>
            <ButtonGeneral>
            <button>
                Submit
            </button>
            </ButtonGeneral>
        </form>    
        </FormWrapper>
    )
}

export default ForwardingHookRefForm;