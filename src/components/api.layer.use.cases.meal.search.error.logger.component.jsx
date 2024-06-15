import { useEffect, useRef, useState } from "react"
import { searchMealsErrorLogin } from '../api/api.meal.main.error.login'
import { Fieldset, Form, Input, MainMealContainer, MealItem, MealLabel, MealListContainer, Title } from "../styledcomponents/styled.components.index"


/**react-design-patterns-app - version 23.11- searchMeals
 * - Features: 
 * 
 *     --> Building 'searchMealsErrorLogin"  
 * 
 * Note: Nesxt will be built the Component  
*/

export const useFetchMeals = () => {

    const [ meals, setMeals ] = useState([])
    const abortRef = useRef({})

    const fetchMeals = async (query) => {

        try {
            abortRef.current.abort?.(); 

            const newMeals = await searchMealsErrorLogin(query)
            setMeals(newMeals)
        } catch (error) {
            throw new Error("error");
            
        }
    }


    return{
        meals,
        fetchMeals,
    }
}

const SearchMealComponentErrorLogger = () => {
    const [query, setQuery] = useState("");
    const { meals, fetchMeals } = useFetchMeals();
  
    useEffect(() => {
      fetchMeals(query);
    }, [query]);
  
    return (
      <MainMealContainer>
    
        <Form>
          <Fieldset>
            <MealLabel htmlFor="meal">Find your lovely meal</MealLabel>
            <Input
              type="text"
              autoComplete="off"
              value={query}
              onChange={({ target }) => setQuery(target.value)}
              id="meal"
            />
          </Fieldset>
        </Form>
        <div>
          <Title>Meals</Title>
          <MealListContainer>
            {meals.map((meal, index) => (
              <MealItem odd={index % 2 !== 0} key={meal.idMeal}>
                <p>{meal.strMeal}</p>
              </MealItem>
            ))}
          </MealListContainer>
        </div>
      </MainMealContainer>
    );
  };
  
  export default SearchMealComponentErrorLogger;