import { useEffect, useState } from "react";
import { emitter } from "../functional.programming.component";

/**react-design-patterns-app - version 5.15 - Counter  
 * - Features: 
 * 
 *     --> Implementing 'emitter.on' and 
 *         'emitter.off' 
 * 
 * Note: with emitter on and off methods i am 
 * listening an event and i am turning off the 
 * listener once is done
 */

const Counter = () => {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        /**here i create simple handlers */
        const onIncrement = () => {
            setCount((count) => count + 1)
        }
        const onDecrement = () => {
            setCount((count) => count - 1)
        }
        /**here is listening / observing the increment
         * and decrement*/
        emitter.on('inc', onIncrement)
        emitter.on('dec', onDecrement)

        return () => {
            /**once observes .. it turns off */
            emitter.off('inc', onIncrement)
            emitter.off('dec', onDecrement)
        }
    },[])

    return <div>#: {count}</div>
}

export default Counter;