import React from "react";
import { useCartContext } from "./shopping.cart.app.optimize.context.api.component.tsx";

const Display = () => {
  const {
    state: { count },
  } = useCartContext();
  return <span className="span">{count}</span>;
};

export default Display;
