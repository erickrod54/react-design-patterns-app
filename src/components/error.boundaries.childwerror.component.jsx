import  React from 'react';

/**react-design-patterns-app - version 8.13 - ChildWithErrorComponent
 * - Features: 
 * 
 *     --> Building 'ChildWithErrorComponent'
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const ChildWithErrorComponent = () => {

    throw new Error("Error in component")
    return(
        <h2>Child Component</h2>
    )
}

export default ChildWithErrorComponent;