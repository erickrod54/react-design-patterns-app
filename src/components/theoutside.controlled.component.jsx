import React, { useState } from "react";
import ControlledModal from "./modal.controlled.component";
import { ButtonGeneral } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 5.19 - TheOutSideControlled
 * - Features: 
 * 
 *     --> Buuilding 'TheOutSideControlled'
 * 
 * Note: this component will explain concepts of controlled and 
 * uncontrolled pattern
*/

const TheOutSideControlled = () => {

    const [ showModal, setShowModal ] = useState(false);
    const closeModal = () => setShowModal(false);
    

    console.log({showModal})

    return(
        <>
        <ControlledModal showModal={showModal} closeModal={closeModal}>
            <h2>the modal content -The OutSide Controlled Component-</h2>
        </ControlledModal>

        <ButtonGeneral>
            <button onClick={() => setShowModal(!showModal)}>{showModal ? 'Hide Modal' : 'Show modal'}</button>
        </ButtonGeneral>   
        </>
    )
}

export default TheOutSideControlled;