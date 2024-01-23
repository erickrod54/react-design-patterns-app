import React from "react";
import { add, remove } from "../../assets/index.assets";
import { ButtonGeneral, ButtonWrapper } from "../../styledcomponents/styled.components";
import { emitter } from '../../components/functional.programming.component'

/**react-design-patterns-app - version 5.15 - Buttons 
 * - Features: 
 * 
 *     --> Building handlers for increment and decrement
 * 
 * Note: Pending to make responsive design
 */


const Buttons = () => {

    /**here i use the emitter in order to increment and decrement */
    const onIncrementCounter = () => {
        emitter.emit('inc')
    }

    const onDecrementCounter = () => {
        emitter.emit('dec')
    }

    return(
        <div>
            <ButtonWrapper >
                <ButtonGeneral>
                    <button onClick={onIncrementCounter} className="counter-buttons">
                        <img src={add} alt="plus"/>
                    </button>
                </ButtonGeneral>
                <ButtonGeneral>
                    <button onClick={onDecrementCounter} className="counter-buttons">
                        <img src={remove} alt="remove"/>
                    </button>
                </ButtonGeneral>
            </ButtonWrapper>
        </div>
    )
}

export default Buttons;