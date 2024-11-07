import { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { AddIngredient, IngredientsInfoHelper, IngredientsList } from "./index.components";
import { StyledContainerIngredients } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 45.10 - IngredientsComponent  
 * - Features: 
 * 
 *     --> Migrating  'StyledContainerIngredients' styles
 * 
 * Note: Pending to make responsive design
 */



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

  const IngredientsComponent = (props) => {
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
  
    const deleteIngredient = (id) => {
      setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
    };
  
    const createIngredientsHeaderText = () => {
      console.log("createIngredientsHeaderText called");
      return <StyledHeading2>Ingredients ({ingredients.length})</StyledHeading2>;
    };
  
    return (
      <StyledContainerIngredients>
        <div>
          {createIngredientsHeaderText()}
          <IngredientsInfoHelper />
        </div>
  
        <StyledSpaceY4>
          <IngredientsList
            ingredients={ingredients}
            deleteIngredient={deleteIngredient}
          />
  
          <AddIngredient
            addIngredient={addIngredient}
            ingredient={ingredient}
            setIngredient={setIngredient}
          />
        </StyledSpaceY4>
      </StyledContainerIngredients>
    );
  };
  
  export default IngredientsComponent;
