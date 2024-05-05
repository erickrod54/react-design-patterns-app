import React, { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

/**react-design-patterns-app - version 18.09 - optimize context api
 * - Features: 
 * 
 *     --> Performing logic separation
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

type CartContext = {
  state: { count: number };
  dispatch: Dispatch<Action>;
};

export const Context = createContext<CartContext | null>(null);

type CartProviderProps = {
    children: ReactNode
  };

export const CartProvider = ({ children }: CartProviderProps) => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
      );
}



export function useCartContext() {
  const value = useContext(Context);

  if (value === null) {
    throw new Error("Must be wrapped inside Context.Provider");
  }

  return value;
}
