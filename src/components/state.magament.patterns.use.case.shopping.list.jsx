import React, { useReducer } from "react";
import styled from "styled-components";
import ShoppingListHeaderBefore from "./state.magament.patterns.use.case.shopping.list.header";
import ShoppingListRowBefore from "./state.magament.patterns.use.case.shopping.list.row";
import { StyledAddItemContainerReducer, StyledContainerReducer, StyledInputReducer, StyledLabelReducer, StyledWrapperReducer } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 38.17 - ShoppingListBefore
 * - Features: 
 * 
 *     -->  Migrating 'StyledInputReducer' styles 
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

const ShoppingListBefore = (props) => {

  const [shoppingList, dispatch] = useReducer(reducer, shoppingItems);

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
          <StyledButton onClick={addItem}>Add</StyledButton>
        </StyledAddItemContainerReducer>
      </StyledWrapperReducer>
    </StyledContainerReducer>
  );
};
export default ShoppingListBefore;

