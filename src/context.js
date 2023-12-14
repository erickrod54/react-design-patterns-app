import React, { useContext } from "react"
import { CodeData, ImagesData, IntroComponentData, patternCard } from "./data";

/**react-design-patterns-app - version 2.10 - context js  
 * - Features: 
 * 
 *     --> Importing and exporting 'CodeData'
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
                CodeData
             }}
        >
            {children}
        </PatternsAppContext.Provider>
    )
}

export const usePatternsAppContext = () => {
    return useContext(PatternsAppContext)
}