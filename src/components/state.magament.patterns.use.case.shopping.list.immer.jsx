import React, { useReducer } from "react";
import styled from "styled-components";
import ShoppingListHeaderBefore from "./state.magament.patterns.use.case.shopping.list.header";
import ShoppingListRowBefore from "./state.magament.patterns.use.case.shopping.list.row";

/**react-design-patterns-app - version 37.14- ShoppingListImmer
 * - Features: 
 * 
 *     -->  Building 'ShoppingListImmer'  
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



