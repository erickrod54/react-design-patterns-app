import axios from "axios";

/**react-design-patterns-app - version 22.01 - Api Layer for SearchMeals
 * - Features: 
 * 
 *     --> Building 'Api Layer for SearchMeals'
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const axiosParams = {
    // Base URL should be set via enviroment

    baseURL:
        process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "/"
}

const axiosInstance = axios.create(axiosParams);

/**returns a boolean in case of an axios error */
export const didAbort = (error) => axios.isCancel(error) && { aborted: true };

/**is a cancelation of a reauest in axios */
const getCancelSource = () => axios.CancelToken.source();

/**api error handling from axios */
export const isApiError = (error = axios.isAxiosError(error)) 

const withAbort = (fn) => {
    /**the args will be url, body config from each api request  */
    const executor = async(...args) => {
        const originalConfig = args[args.length - 1];
        const { abort, ...config } = originalConfig;

        if (typeof abort === 'function') {
            const { cancel, token } = getCancelSource();
            config.CancelToken = token;
            abort(cancel);
        }

        try {
            if (args.length > 2) {
                const [url, body] = args;
                return await fn(url, body, config);
            }else{
                const [url] = args;
                return await fn(url, config);
            }
        } catch (error) {
            if (didAbort(error)) {
                error.aborted = true;
            }

            throw error;
            
        }
    }
    return executor;
}

const api = (axios) => {

    return{
        get: (url, config = {}) => withAbort(axios.get)(url,config),
        delete: (url, config = {}) => withAbort(axios.delete)(url,config),
        post: (url, config = {}) => withAbort(axios.post)(url, body, config),
        patch: (url, config = {}) => withAbort(axios.patch)(url, body, config),
        put: (url, config = {}) => withAbort(axios.put)(url, body, config),
    }
}

export default api(axiosInstance);