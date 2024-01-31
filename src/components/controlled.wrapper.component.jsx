import React, { useState } from "react";
import { ButtonGeneral, ControlledStyled } from "../styledcomponents/styled.components";
 
/**react-design-patterns-app - version 6.12 - ControlledWrapper
 * - Features: 
 * 
 *     --> Building 'ControlledWrapper'
 * 
 * Note: this is a generic component to control other components 
 * display
 */

const ControlledWrapper = ({ children, name }) => {

    const [ show, setShow ] = useState(false);    

    console.log({show})

    return(
        <>
        <ButtonGeneral>
            <button onClick={() => setShow(!show)}>{show ? `Hide ${name}` : `Show modal ${name}`}</button>
        </ButtonGeneral>   

        {show &&
        <ControlledStyled>
            {children}
        </ControlledStyled>
        }

        </>
    )

}

export default ControlledWrapper