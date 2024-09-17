import { useEffect, useState } from "react";
import styled from "styled-components";

/**react-design-patterns-app - version 37.06 - ShoppingListRowBefore
 * - Features: 
 * 
 *     -->  Refactoring 'StyledText'  
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

const StyledText = styled.div`
  color: white;
  font-size: 1.5rem;
  background-color: #816899;
  margin: 0.75rem;
  padding: 0.75rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const StyledButton = styled.button`
margin: 1rem;
padding: 0.75rem;
color: white;
width: 8rem;
background-color: darkblue;
  text-decoration: none;
  border: 1px solid white;


  &:hover {
    background-color: white;
    color: darkblue;
    border-radius: 0.75rem;
    border: 1px solid orange;
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

