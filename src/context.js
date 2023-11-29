import React, { useContext } from "react"
import { patternCard } from "./data";

/**react-design-patterns-app - version 1.02 - context js  
 * - Features: 
 * 
 *     --> Placing and providing 'patternCard'.
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
                patternCard
             }}
        >
            {children}
        </PatternsAppContext.Provider>
    )
}

export const usePatternsAppContext = () => {
    return useContext(PatternsAppContext)
}