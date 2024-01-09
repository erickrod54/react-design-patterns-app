import { useEffect, useState } from "react";
import axios from "axios";

/**react-design-patterns-app - version 4.10 - includeUpdatableResource 
 * - Features: 
 * 
 *     --> Building 'includeUpdatableResource'
 * 
 * Note: 'includeUpdatableResource' is a high order component that
 * will be able to create any Component by the:
 * 
 *    --> 'resourceUrl' ( resource endpoint in the server)
 *  
 *    --> 'resourceName' ( singular name of the resource )
 * 
 */

/**this utility is made in order to capitalize the resource name */
const toCapital = str => str.charAt(0).toUpperCase() + str.slice(1);

/**here i pass 'resourceUrl' that will be the custom path of the resource, 
 * 'resourceName' that will be the name of the dataset*/
const includeUpdatableResource = (Component, resourceUrl, resourceName) => {
  return (props) => {
    const [ intialResource, setInitialResource ] = useState(null);
    const [ resource, setResource ] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        setInitialResource(response.data);
        setResource(response.data);
      })();
    }, []);

    const onChange = (updates) => {
        setResource({ ...resource, ...updates });
    };

    const onPost = async () => {
      const response = await axios.post(resourceUrl, {
        [resourceName]: resource,
      });
      setInitialResource(response.data);
      setResource(response.data);
    };

    const onReset = () => {
      setResource(intialResource);
    };

    /**this solution is made in order to overcome the get and post
     * of several resources from different dataset, due to a high 
     * number of sitautions where can exist conclict by the props names*/
    const resourceProps = {
        [resourceName]: resource,
        [`onChange${toCapital(resourceName)}`]: onChange,
        [`onPost${toCapital(resourceName)}`]: onPost,
        [`onReset${toCapital(resourceName)}`]: onReset,
    }

    return (
      <Component {...props} {...resourceProps}/>
    );
  };
};

export default includeUpdatableResource;