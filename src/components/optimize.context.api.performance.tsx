import React, { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

/**react-design-patterns-app - version 18.17 - optimize performance context api
 * - Features: 
 * 
 *     --> Building 'StateContext' and hook
 * 
 *     --> Building 'DispatchContext' and hook
 * 
 *     --> Building 'CartProviderPerformance'
 * 
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

type State = {
  count: number;
};

type Action = {
  type: "INCREMENT" | "DECREMENT";
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Provide a valid action.");
  }
}

type StateContext =  { count: number };
type DispatchContext =  Dispatch<Action>;

export const StateContext = createContext<StateContext | null>(null);
export const DispatchContext = createContext<DispatchContext | null>(null);

type CartProviderProps = {
    children: ReactNode
  };

export const CartProviderPerformance = ({ children }: CartProviderProps) => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
      );
}



export function useValueContext() {
  const value = useContext(StateContext);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
}

export function useDispatchContext() {
    const value = useContext(DispatchContext);
  
    if (value === null) {
      throw new Error("Must be wrapped inside Context.Provider");
    }
  
    return value;
  }
