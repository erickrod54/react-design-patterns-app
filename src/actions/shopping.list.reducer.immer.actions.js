/**react-design-patterns-app - version 39.12 - reducertwo
 * - Features: 
 * 
 *     -->  Migrating 'reducertwo' actions 
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

/**this reducer has actions types with syntax
 * according with useImmer, dynamic object asignation*/
export const reducertwo = (state, action) => {

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