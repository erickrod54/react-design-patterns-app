import React from "react";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 1.05 - HomePage 
 * - Features: 
 * 
 *     --> Adding breakpoints for 'max-sm' and 'max-2xl'
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */


const HomePage = () =>  {
    
    const { patternCard } = usePatternsAppContext()
    console.log({patternCard})

    return(
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul>
                            <li className="m-2">
                            <div key={id} className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
    )
}

export default HomePage;