import { useState } from "react";
import { useApiStatus } from "./api.status.hook";
import { PENDING,SUCCESS, ERROR } from "../constants/api.status";

/**react-design-patterns-app - version 22.00 - api.logic.data.handling.hook
 * - Features: 
 * 
 *     --> Building 'useApi' to handle data and logic.	
 * 
 * Note: this hook will rehuse data structures and logic previously built
 * to handle data and logic in a more efficient way.
 */

export function useApi(fn, config = {}) {
    const { initialData } = config;
    const [data, setData] = useState(initialData);
    const [error, setError] = useState();
    const { status, setStatus, ...normalisedStatuses } = useApiStatus();
    const exec = async (...args) => {
      try {
        setStatus(PENDING);
        const data = await fn(...args);
        setData(data);
        setStatus(SUCCESS);
        return {
          data,
          error: null,
        };
      } catch (error) {
        setError(error);
        setStatus(ERROR);
        return {
          error,
          data: null,
        };
      }
    };
    return {
      data,
      setData,
      status,
  
      setStatus,
      error,
      exec,
      ...normalisedStatuses,
    };
  }