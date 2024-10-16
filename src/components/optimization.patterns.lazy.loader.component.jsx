import { useEffect, useState } from "react";

/**react-design-patterns-app - version 41.17 - LazyLoader
 * - Features: 
 * 
 *     --> Building 'LazyLoader'     
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const LazyLoader = ({ show = false, delay = 0 }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;

    if (!show) {
      setShowLoader(false);
      return;
    }

    if (delay === 0) {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(true), delay);
    }
  }, [show, delay]);

  return showLoader ? <h3>Loading...</h3> : null;
};

export default LazyLoader;