/**react-design-patterns-app - version 50.01 - debounce
 * - Features: 
 * 
 *     --> Starting 'debouncing' 
 *
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

export const debounce = (fn, delay) => {
    let timerId;
  
    return (...args) => {
      if (timerId) {
        clearTimeout(timerId);
      }
  
      timerId = setTimeout(() => fn(...args), delay);
    };
  };
  