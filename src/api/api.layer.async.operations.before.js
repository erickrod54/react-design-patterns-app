import axios from "axios";

/**react-design-patterns-app - version 19.21 - api file
 * - Features: 
 * 
 *     --> Building 'axiosParams' object
 *  
 *     --> Building 'axiosInstance' object 
 *
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const axiosParams = {
    // Base URL should be set via enviroment

    baseURL:
        process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "/"
}

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {

    return{
        get: (url, config = {}) => axios.get(url,config),
        delete: (url, config = {}) => axios.delete(url,config),
        post: (url, config = {}) => axios.post(url,config),
        patch: (url, config = {}) => axios.patch(url,config),
        put: (url, config = {}) => axios.put(url,config),
    }
}

export default api(axiosInstance);