import React, { useContext } from "react"
import { CodeData, ImagesData, IntroComponentData, authors, books, myNestedObject, patternCard } from "./data";
import axios from "axios";

/**react-design-patterns-app - version 4.14 - context js  
 * - Features: 
 * 
 *     --> Importing and exporting 'myNestedObject'
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
*/

const PatternsAppContext = React.createContext();


export const PatternsAppProvider = ({ children }) => {
    
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
                myNestedObject,
                getDataFromServer,
                getDataFromLocalStorage
             }}
        >
            {children}
        </PatternsAppContext.Provider>
    )
}

export const usePatternsAppContext = () => {
    return useContext(PatternsAppContext)
}