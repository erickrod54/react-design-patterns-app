import { useState } from "react";

/**react-design-patterns-app - version 5.13 - Counter  
 * - Features: 
 * 
 *     --> Building 'Counter' Compnent
 * 
 * Note: Pending to make responsive design
 */

const Counter = () => {
    const [ count, setCount ] = useState(0)

    return <div>#: {count}</div>
}

export default Counter;