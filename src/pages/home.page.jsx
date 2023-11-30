import React from "react";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 1.03 - HomePage 
 * - Features: 
 * 
 *     --> Pending make responsive design
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */


const HomePage = () =>  {
    
    const { patternCard } = usePatternsAppContext()
    console.log({patternCard})

    return(
        <>
            
            <div className="m-4 p-4 grid grid-cols-8 gap-6">
                {patternCard.map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <div key={id} className="bg-gray-400 p-4 flex justify-center items-center shadow-md border border-green-500 border-6 cursor-pointer">{pattern}</div>
                    )
                })}
                
            </div>
 

        </>
    )
}

export default HomePage;