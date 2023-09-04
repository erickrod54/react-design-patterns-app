import React from "react";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 1.01 - HomePage 
 * - Features: 
 * 
 *     --> Building 'HomePage' page
 * 
 *     --> testing the context.
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */


const HomePage = () =>  {
    
    const { test } = usePatternsAppContext()
    console.log('this is the test message ==>', test)
    return(
        <h2>Home Page</h2>
    )
}

export default HomePage;