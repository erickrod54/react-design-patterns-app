import { useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { searchMeals } from "../api/api.meal.main"
import { didAbort } from "../api/api.layer.use.case.meal.search"


/**react-design-patterns-app - version 22.01 - searchMeals
 * - Features: 
 * 
 *     --> Building 'useFetchMeals" hook 
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