import React, { useRef } from "react";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 7.19 - ForwardingRefForm 
 * - Features: 
 * 
 *     --> Building 'ForwardingRefForm' component. 
 * 
 * Note: 'UserInfoFormAnyResource' taking as base code the
 * 'UserInfoForm', with few modifications can render any 
 * resource given
 * 
 */

const ForwardingRefForm = () => {

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
            {/**here using the reference i get access to the user data */}
            <input ref={inputRef}/>
            <ButtonGeneral>
            <button>
                Submit
            </button>
            </ButtonGeneral>
        </form>    
        </FormWrapper>
    )
}

export default ForwardingRefForm;