import React, { useContext, useState } from "react"
import { CodeData, ImagesData, IntroComponentData, authors, boardData, books, initialIngredientsone, myNestedObject, patternCard, shoppingItems, shoppingItemsImmer } from "./data";
import axios from "axios";


/**react-design-patterns-app - version 45.13 - context js  
 * - Features: 
 * 
 *     --> Adding 'initialIngredientsone' data
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
*/

const PatternsAppContext = React.createContext();


export const PatternsAppProvider = ({ children }) => {


    /**Callback states and handlers - AdvancedHooks */

    const [ showCallback, setShowCallback ] = useState(false);

    const CallbackHandler = () => {

        return setShowCallback(!showCallback)
    }
    
    //const test = 'testing pattern context'


    /**data source resources */

    /**handler to get data for the 'ContainerDataSource', it 
     * is a custom handler cause will get the 'url' dynamicly */
    const getDataFromServer = async(url) => {
        const response = await axios.get(url);
        return response.data
    }

    const getDataFromLocalStorage = (key) => () => {
        return localStorage.getItem(key)
    }
    
    return(
        <PatternsAppContext.Provider
        value={{
                patternCard,
                IntroComponentData,
                ImagesData,
                CodeData,
                authors,
                books,
                showCallback,
                CallbackHandler,
                myNestedObject,
                getDataFromServer,
                getDataFromLocalStorage,
                boardData,
                shoppingItems,
                shoppingItemsImmer,
                initialIngredientsone
             }}
        >
            {children}
        </PatternsAppContext.Provider>
    )
}

export const usePatternsAppContext = () => {
    return useContext(PatternsAppContext)
}