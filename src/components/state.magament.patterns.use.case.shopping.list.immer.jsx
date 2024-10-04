import React, { useReducer } from "react";
import styled from "styled-components";
import ShoppingListHeaderBefore from "./state.magament.patterns.use.case.shopping.list.header";
import ShoppingListRowBefore from "./state.magament.patterns.use.case.shopping.list.row";
import { useImmerReducer } from "use-immer";
import { StyledAddItemContainerImmer, StyledButtonImmer, StyledContainerImmer, StyledInputImmer, StyledLabelImmer, StyledWrapperImmer } from "../styledcomponents/styled.components";
import { usePatternsAppContext } from "../context";
import { getUuidImmer } from "../utils/shopping.list.utils";

/**react-design-patterns-app - version 39.11 - ShoppingListImmer
 * - Features: 
 * 
 *     -->  Migrating  'getUuidImmer' 
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
      state.newShoppingItemName = "";
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

  const ShoppingListImmer = (props) => {

      const { shoppingItemsImmer } = usePatternsAppContext();

    const [shoppingList, dispatch] = useImmerReducer(reducer, shoppingItemsImmer);
  
    const addItem = () => {
      if (!shoppingList.newShoppingItemName) return;
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: getUuidImmer(),
          name: shoppingList.newShoppingItemName,
        },
      });
    };
  
    const deleteItem = (item) => {
      dispatch({
        type: "DELETE_ITEM",
        payload: item,
      });
    };
  
    const updateItem = (payload) => {
      dispatch({
        type: "UPDATE_ITEM",
        payload,
      });
    };
  
    const onChangeShoppingListItemName = (e) => {
      dispatch({
        type: "UPDATE_NEW_SHOPPING_ITEM_NAME",
        payload: e.target.value,
      });
    };
  
    return (
      <StyledContainerImmer>
        <StyledWrapperImmer>
          <ShoppingListHeaderBefore shoppingList={shoppingList.items} />
          <div style={{ marginBottom: "1.5rem" }}>
            {shoppingList.items.map((item, index) => (
              <ShoppingListRowBefore
                key={item.id}
                item={item}
                index={index}
                updateItem={updateItem}
                deleteItem={deleteItem}
              />
            ))}
          </div>
          <StyledAddItemContainerImmer>
            <StyledLabelImmer htmlFor="shoppingItemField">Add item</StyledLabelImmer>
            <StyledInputImmer
              type="text"
              id="shoppingItemField"
              value={shoppingList.newShoppingItemName}
              onChange={onChangeShoppingListItemName}
            />
            <StyledButtonImmer onClick={addItem}>Add</StyledButtonImmer>
          </StyledAddItemContainerImmer>
        </StyledWrapperImmer>
      </StyledContainerImmer>
    );
  };
  export default ShoppingListImmer;


