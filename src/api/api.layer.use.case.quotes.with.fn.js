import axios from "axios";

/**react-design-patterns-app - version 25.05- api file
 * - Features: 
 * 
 *     --> Building 'API layers fro quotes app'
 *
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const axiosParams = {
  // Base URL should be set via environment
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:9000/" : "/",
};

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
      if (didAbort(error)) {
        error.aborted = true;
      }

      throw error;
    }
  };

  return executor;
};

export const withLogger = async (promise) =>
  promise.catch((error) => {
    if (!process.env.REACT_APP_DEBUG_API) throw error;

    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
    throw error;
  });
const api = (axios) => {
  return {
    get: (url, config = {}) => withLogger(withAbort(axios.get)(url, config)),
    delete: (url, config = {}) =>
      withLogger(withAbort(axios.delete)(url, config)),
    post: (url, body, config = {}) =>
      withLogger(withAbort(axios.post)(url, body, config)),
    patch: (url, body, config = {}) =>
      withLogger(withAbort(axios.patch)(url, body, config)),
    put: (url, body, config = {}) =>
      withLogger(withAbort(axios.put)(url, body, config)),
  };
};

export default api(axiosInstance);