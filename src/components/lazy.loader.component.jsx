import { useEffect, useState } from "react";

/**react-design-patterns-app - version 21.13 - components > index  
 * - Features: 
 * 
 *     --> Building 'LazyLoader'
 * 
 * Note: Pending to make responsive design
 */

const LazyLoader = ( props ) => {  
    const { show = false, delay = 0 } = props;
    const [ showLoader, setShowLoader ] = useState(false);

    useEffect(() => {
        let timeout;

        if (!show) {
            setShowLoader(false);
            return;
        }

        if (delay === 0) {
            setShowLoader(true);
            return;   
        }else{
            timeout = setTimeout(() => setShowLoader(true), delay)
        }

        return () => {
            clearInterval(timeout)
        }
    }, [show, delay])

    return showLoader ? "Loading..." : props.default;

}

export default LazyLoader;