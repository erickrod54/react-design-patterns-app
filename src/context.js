import React, { useContext } from "react"

/**react-design-patterns-app - version 1.01 - context js  
 * - Features: 
 * 
 *     --> Building the context, providers and context
 *         hook.
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

const PatternsAppContext = React.createContext();


export const PatternsAppProvider = ({ children }) => {

    const test = 'testing pattern context'

    return(
        <PatternsAppContext.Provider
             value={{test}}
        >
            {children}
        </PatternsAppContext.Provider>
    )
}

export const usePatternsAppContext = () => {
    return useContext(PatternsAppContext)
}