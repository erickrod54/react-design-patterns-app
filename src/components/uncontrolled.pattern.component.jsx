import React from "react";
import { ButtonGeneral, FormWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.05 - styled.components
 * - Features: 
 * 
 *     --> Building 'UncontrolledPattern' component.
 * 
 * Note: this will be a simple form with the 
 * Uncontrolled Pattern characteristics
 */

const UncontrolledPattern = () => {

    const nameInputRef = React.createRef();
    const ageInputRef = React.createRef();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('the name ==>', nameInputRef.current.value)
        console.log('the age ==>',ageInputRef.current.value)
    }   

    return(
        <FormWrapper>
            <form onSubmit={submitHandler}>
                <input name="name" type="text" placeholder="Name" ref={nameInputRef}/>
                <input age="age" type="number" placeholder="Age" ref={ageInputRef}/>
                <ButtonGeneral>
                    <input type="submit" placeholder="Submit"/>
                </ButtonGeneral>
            </form>
        </FormWrapper>
    )
}

export default UncontrolledPattern;