import React, { useReducer } from "react";
import styled from "styled-components";
import ShoppingListHeaderBefore from "./state.magament.patterns.use.case.shopping.list.header";
import ShoppingListRowBefore from "./state.magament.patterns.use.case.shopping.list.row";

/**react-design-patterns-app - version 36.16 - ShoppingListBefore
 * - Features: 
 * 
 *     -->  Building 'ShoppingListBefore' data
 * 
 * Note: the macro 'tw' in order to work and use has to be installed
 * there is around 4 or 5 libraries and this is oen of the most active
 * and recent
 * 
 *          https://www.npmjs.com/package/twin.macro
 * 
 * i have to create a root access custom color palette in order 
 * to use them in the custom titles
 */



//Initial state for the shopping list reducer

const shoppingItems = {
  newShoppingItemName: "",
  items: [
    {
      id: "1",
      name: "Sea Salt",
    },
    {
      id: "2",
      name: "Apples",
    },
    {
      id: "3",
      name: "Chicken breasts",
    },
  ],
};

