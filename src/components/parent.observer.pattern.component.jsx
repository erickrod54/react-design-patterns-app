import React from "react"
import Buttons from "./prop-sub-components/buttons.observer.pattern.component";
import Counter from "./prop-sub-components/counter.observer.pattern.component";

/**react-design-patterns-app - version 5.15 - ParentComponent  
 * - Features: 
 * 
 *     --> Importing 'Counter'
 * 
 * Note: Pending to make responsive design
 */

const ParentComponent = () => {

    return(
        <>
            <Buttons />
            <Counter />
        </>
    )
}

export default ParentComponent;