import { useEffect, useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { searchMeals } from "../api/api.meal.main"
import { didAbort } from "../api/api.layer.use.case.meal.search"
import { Fieldset, Form, MainMealContainer, MealLabel } from "../styledcomponents/styled.components.index"


/**react-design-patterns-app - version 22.06 - searchMeals
 * - Features: 
 * 
 *     --> Importing 'MealLabel" Styled Component 
 * 
 * Note: Nesxt will be built the Component  
*/

export const useFetchMeals = () => {

    const [ meals, setMeals ] = useState([])
    const abortRef = useRef({})

    const handleQuoteError = (error) => {
        if (didAbort(error)) {
            /**request aborted */
            toast.error("Request Aborted!")
        }else{
            /**error happen */
            toast.error("Oh no! Something went wrong!")
        }
    }

    const fetchMeals = async (query) => {

        try {
            abortRef.current.abort?.(); 

            const newMeals = await searchMeals(query, {
                abort: (abort) => (abortRef.current.abort = abort)
            })
            setMeals(newMeals)
        } catch (error) {
            handleQuoteError(error);
        }
    }


    return{
        meals,
        fetchMeals,
    }
}

const SearchMealComponent = () => {
    const [query, setQuery] = useState("");
    const { meals, fetchMeals } = useFetchMeals();
  
    useEffect(() => {
      fetchMeals(query);
    }, [query]);
  
    return (
      <MainMealContainer>
        <ToastContainer />
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
          <MealContainer>
            {meals.map((meal, index) => (
              <MealItem odd={index % 2 !== 0} key={meal.idMeal}>
                <p>{meal.strMeal}</p>
              </MealItem>
            ))}
          </MealContainer>
        </div>
      </MainMealContainer>
    );
  };
  
  export default SearchMealComponent;