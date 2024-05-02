import React, { Dispatch, createContext, useContext, useReducer } from "react";
import Buttons from "./buttons.cart.app.optimize.context.api.component.tsx";
import Display from "./display.cart.app.optimize.context.api.component.tsx";
import { ShoppingCounterWrapper } from "../styledcomponents/styled.components.js";

/**react-design-patterns-app - version 18.02 - ShoppingCounter
 * - Features: 
 * 
 *     --> Styling using ShoppingCounterWrapper
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

const ShoppingCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <Context.Provider value={{ state, dispatch }}>
        <ShoppingCounterWrapper>
            <Display />
            <Buttons />
        </ShoppingCounterWrapper>
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

export default ShoppingCounter;
