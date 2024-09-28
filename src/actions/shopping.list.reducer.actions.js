
/**react-design-patterns-app - version 38.20 - reducerone
 * - Features: 
 * 
 *     -->  Migrating 'reducerone' actions 
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

export const reducerone = (state, action) => {

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