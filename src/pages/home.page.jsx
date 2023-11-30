import React from "react";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 1.04 - HomePage 
 * - Features: 
 * 
 *     --> Responsive design - work in progress
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */


const HomePage = () =>  {
    
    const { patternCard } = usePatternsAppContext()
    console.log({patternCard})

    return(
        <>
            
            <div className="m-8 p-8 sm:grid grid-cols-8 gap-6 max-sm:grid-cols-2">
                {patternCard.map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <div key={id} className="bg-gray-400 p-4 flex
                                 justify-center items-center
                                 shadow-md border
                                 border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                    )
                })}
                
            </div>
 

        </>
    )
}

export default HomePage;