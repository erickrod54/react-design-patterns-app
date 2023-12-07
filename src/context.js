import React, { useContext } from "react"
import { IntroComponentData, patternCard } from "./data";

/**react-design-patterns-app - version 1.15 - context js  
 * - Features: 
 * 
 *     --> Placing and providing 'IntroComponentData'.
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
                IntroComponentData
             }}
        >
            {children}
        </PatternsAppContext.Provider>
    )
}

export const usePatternsAppContext = () => {
    return useContext(PatternsAppContext)
}