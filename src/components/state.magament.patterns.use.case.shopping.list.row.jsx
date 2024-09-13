import { useEffect, useState } from "react";
import styled from "styled-components";

/**react-design-patterns-app - version 36.15 - ShoppingListHeaderBefore
 * - Features: 
 * 
 *     -->  Building 'ShoppingListRowBefore'  
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

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInputContainer = styled.div``;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledText = styled.div``;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const StyledButton = styled.button`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

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

const ShoppingListRowBefore = (props) => {
  const { item, deleteItem, index } = props;
  const { name, isEditing, cancelEdit, setName, onSaveItem, onEditItem } =
    useEditShoppingItem(props);
  return (
    <StyledContainer>
      <StyledInputContainer>
        {isEditing ? (
          <StyledInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <StyledText>{item.name}</StyledText>
        )}
      </StyledInputContainer>
      <StyledButtonContainer>
        {isEditing ? (
          <>
            <StyledButton onClick={onSaveItem}>Save</StyledButton>
            <StyledButton onClick={cancelEdit}>Cancel</StyledButton>
          </>
        ) : (
          <>
            <StyledButton onClick={onEditItem}>Edit</StyledButton>
            <StyledButton onClick={() => deleteItem({ index })}>
              Delete
            </StyledButton>
          </>
        )}
      </StyledButtonContainer>
    </StyledContainer>
  );
};
export default ShoppingListRowBefore;

