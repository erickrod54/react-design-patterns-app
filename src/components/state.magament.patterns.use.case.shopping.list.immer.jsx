import React, { useReducer } from "react";
import styled from "styled-components";
import ShoppingListHeaderBefore from "./state.magament.patterns.use.case.shopping.list.header";
import ShoppingListRowBefore from "./state.magament.patterns.use.case.shopping.list.row";
import { useImmerReducer } from "use-immer";

/**react-design-patterns-app - version 37.17 - ShoppingListImmer
 * - Features: 
 * 
 *     -->  Building  'getUuid'  
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

const StyledContainer = styled.div`
  padding-top: 2rem;
  max-width: 4xl;
  margin: 0 auto;
  text-align: left;
`;

const StyledWrapper = styled.div`
  max-width: xs;
`;

const StyledAddItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;
  max-width: xs;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  color: yellow;
  font-size: 1.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  margin: 4px;
  padding: 4px;
  border-radius: 0.30rem;
  color: black;
  font-size: 1.5rem;
`;

const StyledButton = styled.button`
  align-self: flex-end;
  padding: 0.5rem 1rem;
  background-color: white;
  color: #1a472a;
  width: 30%;
  font-size: 1.25rem;
  font-weight: 600;

  &:hover {
    background-color: white;
    color: darkblue;
    border-radius: 0.75rem;
    border: 1px solid orange;
  }
`;

//Generate an id for new shopping list items
const getUuid = () => "_" + Math.random().toString(36).substr(2, 9);

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



