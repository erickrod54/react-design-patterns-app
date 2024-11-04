import { useCallback, useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { AddIngredient, IngredientsInfoHelper, IngredientsListOptimized } from "./index.components";

/**react-design-patterns-app - version 45.01 - IngredientsComponent  
 * - Features: 
 * 
 *     --> Building  'IngredientsComponentOptimized'
 * 
 * Note: Pending to make responsive design
 */

const StyledContainer = styled.div`
  margin-top: 2rem;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  background: blueviolet;
  border-radius: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem;
    padding: 1rem;
  }

  > div > h2 {
    font-size: x-large;
    color: white;
    text-decoration: underline;
  }
`;

const StyledHeading2 = styled.h2`
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledSpaceY4 = styled.div`
  margin-top: 1rem;

  > * + * {
    margin-top: 1rem;
  }
`;

const initialIngredients = [
    {
      id: nanoid(),
      name: "500g Chicken Breasts",
    },
    {
      id: nanoid(),
      name: "300 ml milk",
    },
    {
      id: nanoid(),
      name: "1 tbsp salt",
    },
  ];

  const IngredientsComponentOptimized = (props) => {
    console.log("Ingredient rendered");
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState(initialIngredients);
  
    const addIngredient = (ingredient) => {
      setIngredients((ingredients) => [
        ...ingredients,
        {
          name: ingredient,
          id: nanoid(),
        },
      ]);
    };
  
    /**useCallback will received two arguments, the function to memoized
     * and a dependency array*/
    const deleteIngredient = useCallback(
        (id) => {
            setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
          }
        ,[])
  
    const createIngredientsHeaderText = () => {
      console.log("createIngredientsHeaderText called");
      return <StyledHeading2>Ingredients ({ingredients.length})</StyledHeading2>;
    };
  
    return (
      <StyledContainer>
        <div>
          {createIngredientsHeaderText()}
          <IngredientsInfoHelper />
        </div>
  
        <StyledSpaceY4>
          <IngredientsListOptimized
            ingredients={ingredients}
            deleteIngredient={deleteIngredient}
          />
  
          <AddIngredient
            addIngredient={addIngredient}
            ingredient={ingredient}
            setIngredient={setIngredient}
          />
        </StyledSpaceY4>
      </StyledContainer>
    );
  };
  
  export default IngredientsComponentOptimized;