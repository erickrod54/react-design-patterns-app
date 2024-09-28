import React, { useReducer } from "react";
import styled from "styled-components";
import ShoppingListHeaderBefore from "./state.magament.patterns.use.case.shopping.list.header";
import ShoppingListRowBefore from "./state.magament.patterns.use.case.shopping.list.row";
import { StyledAddItemContainerReducer, StyledButtonReducer, StyledContainerReducer, StyledInputReducer, StyledLabelReducer, StyledWrapperReducer } from "../styledcomponents/styled.components";
import { usePatternsAppContext } from "../context";
import { reducerone } from "../actions/actions.index";

/**react-design-patterns-app - version 38.20 - ShoppingListBefore
 * - Features: 
 * 
 *     -->  Migrating 'reducerone' data 
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



//Generate an id for new shopping list items
const getUuid = () => "_" + Math.random().toString(36).substr(2, 9);



const ShoppingListBefore = (props) => {

  const { shoppingItems } = usePatternsAppContext();

  const [shoppingList, dispatch] = useReducer(reducerone, shoppingItems);

  const addItem = () => {
    if (!shoppingList.newShoppingItemName) return;
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: getUuid(),
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
    <StyledContainerReducer>
      <StyledWrapperReducer>
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
        <StyledAddItemContainerReducer>
          <StyledLabelReducer htmlFor="shoppingItemField">Add item</StyledLabelReducer>
          <StyledInputReducer
            type="text"
            id="shoppingItemField"
            value={shoppingList.newShoppingItemName}
            onChange={onChangeShoppingListItemName}
          />
          <StyledButtonReducer onClick={addItem}>Add</StyledButtonReducer>
        </StyledAddItemContainerReducer>
      </StyledWrapperReducer>
    </StyledContainerReducer>
  );
};
export default ShoppingListBefore;

