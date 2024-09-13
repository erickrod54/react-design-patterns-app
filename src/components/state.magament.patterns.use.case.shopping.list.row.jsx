import { useEffect, useState } from "react";
import styled from "styled-components";

/**react-design-patterns-app - version 36.12 - ShoppingListHeaderBefore
 * - Features: 
 * 
 *     -->  Building 'useEditShoppingItem' 
 * 
 * Note: useEditShoppingItem will have:
 * 
 *     --> 'onSaveItem'
 *     --> 'onEditItem'
 *     --> 'cancelEdit'
 * 
 * operations that will be performed and destructured 
 * from 'useEditShoppingItem'
 * 
 */

const useEditShoppingItem = (props) => {
  const { item, updateItem, index } = props;
  const [name, setName] = useState(item.name);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    setName(props.item.name);
  }, [props.item]);

  const onSaveItem = () => {
    updateItem({
      index,
      item: {
        ...item,
        name,
      },
    });
    setIsEditing(false);
  };

  const onEditItem = () => {
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setName(props.item.name);
  };

  return {
    name,
    isEditing,
    cancelEdit,
    setName,
    onSaveItem,
    onEditItem,
  };
};

