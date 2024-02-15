import React from "react";

/**react-design-patterns-app - version 8.08 - RecursivePattern 
 * - Features: 
 *    
 *     --> Fixing a key error.
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */


/**the evaluation for a base condition */
const isObject = data => typeof data === 'object' && data !== null;

const RecursivePattern = ({ data }) => {

    
        /**this is the base condition of the recursion */
        if (!isObject(data)) {
            return(
                <li>
                    {data}
                </li>
            )
        }

        /**this will be the recursive case, calling the component itself
         * until render all the key pair (unique values) of the object 
         * data in the component itself */
        const pairs = Object.entries(data);

        return(
            <>
                {pairs.map(([key, value]) => {
                    <div key={key}>
                        return(
                        <li >
                            {key}
                            <RecursivePattern data={value}/>
                        </li>
                        )
                    </div>
                })}
            </>
        )
}

export default RecursivePattern;