import React, { useContext } from "react"
import { CodeData, ImagesData, IntroComponentData, authors, books, patternCard } from "./data";

/**react-design-patterns-app - version 2.14 - context js  
 * - Features: 
 * 
 *     --> Importing and exporting 'books' data
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

const PatternsAppContext = React.createContext();


export const PatternsAppProvider = ({ children }) => {
    
    //const test = 'testing pattern context'
    
    return(
        <PatternsAppContext.Provider
        value={{
                
                patternCard,
                IntroComponentData,
                ImagesData,
                CodeData,
                authors,
             }}
        >
            {children}
        </PatternsAppContext.Provider>
    )
}

export const usePatternsAppContext = () => {
    return useContext(PatternsAppContext)
}