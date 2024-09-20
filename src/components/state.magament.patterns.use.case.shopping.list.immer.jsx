import React, { useReducer } from "react";
import styled from "styled-components";
import ShoppingListHeaderBefore from "./state.magament.patterns.use.case.shopping.list.header";
import ShoppingListRowBefore from "./state.magament.patterns.use.case.shopping.list.row";
import { useImmerReducer } from "use-immer";

/**react-design-patterns-app - version 37.15- ShoppingListImmer
 * - Features: 
 * 
 *     -->  Building 'reducer'  
 * 
 * Note: the reducer actions will implement later the 
 * useImmerReducer hook in  order to perform the following
 * 4 operations:
 * 
 *     -->  UPDATE_NEW_SHOPPING_ITEM_NAME
 *     -->  ADD_ITEM
 *     -->  UPDATE_ITEM
 *     -->  DELETE_ITEM
 * 
 * with a dynamic object asigment 
 *    
 */

/**the inital  data for immer implementation*/
const shoppingItemsImmer = {
  newShoppingItemName: "",
  items: [
    {
      id: "1",
      name: "Plumbs",
    },
    {
      id: "2",
      name: "Apples Cider",
    },
    {
      id: "3",
      name: "Chicken legs",
    },
  ],
};

/**this reducer has actions types with syntax
 * according with useImmer, dynamic object asignation*/
const reducer = (state, action) => {

    switch (action.type) {
  
     // Update the name of the new shopping item
     case "UPDATE_NEW_SHOPPING_ITEM_NAME":
        state.newShoppingItemName = action.payload;
        break;

    // Add a new item to the shopping list
    case "ADD_ITEM":
        state.newShoppingItemName == "";
        state.items.push(action.payload);
        break;

    // Update an existing item in the shopping list
    case "UPDATE_ITEM":
        state.items.splice(action.payload.index, 1, action.payload.item);
        break;

    // Delete an item from the shopping list
    case "DELETE_ITEM":
        state.items.splice(action.payload.index, 1);
        break;
        
    }
    return state;
  };



