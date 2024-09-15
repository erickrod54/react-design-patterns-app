import React, { useReducer } from "react";
import styled from "styled-components";
import ShoppingListHeaderBefore from "./state.magament.patterns.use.case.shopping.list.header";
import ShoppingListRowBefore from "./state.magament.patterns.use.case.shopping.list.row";

/**react-design-patterns-app - version 36.20 - ShoppingListBefore
 * - Features: 
 * 
 *     -->  Building 'reducer' actions
 * 
 * Note: the reducer actions will implement later the 
 * useReducer hook in  order to perform the following
 * 4 operations:
 * 
 *     -->  UPDATE_NEW_SHOPPING_ITEM_NAME
 *     -->  ADD_ITEM
 *     -->  UPDATE_ITEM
 *     -->  DELETE_ITEM
 *    
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

const reducer = (state, action) => {

  switch (action.type) {

    case "UPDATE_NEW_SHOPPING_ITEM_NAME":
      return {
        ...state,
        newShoppingItemName: action.payload,
      };

    case "ADD_ITEM":
      return {
        ...state,
        newShoppingItemName: "",
        items: [...state.items, action.payload],
      };

    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item, idx) => {
          if (idx === action.payload.index) {
            return action.payload.item;
          }
          return item;
        }),
      };

    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((_, idx) => idx !== action.payload.index),
      };
    default:
      return state;
  }
};

