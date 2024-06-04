import axios from "axios";

/**react-design-patterns-app - version 22.02 - Api Layer for SearchMeals
 * - Features: 
 * 
 *     --> Refactoring 'Api Layer for SearchMeals'
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const axiosParams = {
  // Set different base URL based on the environment
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
};

// Create axios instance with default params
const axiosInstance = axios.create(axiosParams);

export const didAbort = (error) => axios.isCancel(error) && { aborted: true };

const getCancelSource = () => axios.CancelToken.source();

export const isApiError = (error) => axios.isAxiosError(error);

const withAbort = (fn) => {
  const executor = async (...args) => {
    const originalConfig = args[args.length - 1];
    const { abort, ...config } = originalConfig;

    if (typeof abort === "function") {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel);
    }

    try {
      if (args.length > 2) {
        const [url, body] = args;
        return await fn(url, body, config);
      } else {
        const [url] = args;
        return await fn(url, config);
      }
    } catch (error) {
      console.log("api error", error);

      if (didAbort(error)) {
        error.aborted = true;
      }

      throw error;
    }
  };

  return executor;
};

const api = (axios) => {
  return {
    get: (url, config = {}) => withAbort(axios.get)(url, config),
    delete: (url, config = {}) => withAbort(axios.delete)(url, config),
    post: (url, body, config = {}) => withAbort(axios.post)(url, body, config),
    patch: (url, body, config = {}) =>
      withAbort(axios.patch)(url, body, config),
    put: (url, body, config = {}) => withAbort(axios.put)(url, body, config),
  };
};

export default api(axiosInstance);