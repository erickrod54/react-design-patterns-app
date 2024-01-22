import React from "react";
import { add, remove } from "../../assets/index.assets";
import { ButtonGeneral, ButtonWrapper } from "../../styledcomponents/styled.components";

/**react-design-patterns-app - version 5.13 - Buttons 
 * - Features: 
 * 
 *     --> Building 'Buttons' Component
 * 
 * Note: Pending to make responsive design
 */


const Buttons = () => {

    const onIncrementCounter = () => {

    }

    const onDecrementCounter = () => {

    }

    return(
        <div>
            <ButtonWrapper>
                <ButtonGeneral>
                    <button onClick={onIncrementCounter}>{add}</button>
                </ButtonGeneral>
                <ButtonGeneral>
                    <button onClick={onDecrementCounter}>{remove}</button>
                </ButtonGeneral>
            </ButtonWrapper>
        </div>
    )
}

export default Buttons;