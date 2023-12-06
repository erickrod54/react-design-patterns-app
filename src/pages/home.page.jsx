import React from "react";
import { usePatternsAppContext } from "../context";
import { Link } from "react-router-dom";
import { IntroComponent } from "../components/index.components";

/**react-design-patterns-app - version 1.14 - HomePage 
 * - Features: 
 * 
 *     --> Changing 'IntroComponent' import
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */


const HomePage = () =>  {
    
    const { patternCard } = usePatternsAppContext()
    console.log({patternCard});

    const category_1 = patternCard[0].category;
    const category_2 = patternCard[12].category;
    const category_3 = patternCard[18].category;
    const category_4 = patternCard[20].category;
    const category_5 = patternCard[22].category;
    const category_6 = patternCard[30].category;
    const category_7 = patternCard[7].category;
    
    return(
        <>

            <IntroComponent />

            <div className="m-8 p-8">
                <p  className="text-3xl">{category_1}</p>
                <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                    {patternCard.filter((patternString) => patternString.category.includes('Component Patterns')).map((Card) => {

                        const { id, pattern } = Card
                        return(
                            <ul key={id}>
                                <li className="m-2">
                                <Link to={`${id}`}>
                                <div className="bg-gray-400 p-4 flex
                                        m-4
                                        justify-center items-center
                                        shadow-md border
                                        border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                                </Link>
                                </li>
                            </ul>
                        )
                    })}
                    
                </div>
            </div>

            <div className="m-8 p-8">
                <p  className="text-3xl">{category_7}</p>
                <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                    {patternCard.filter((patternString) => patternString.category.includes('Advanced Concepts and Hooks')).map((Card) => {

                        const { id, pattern } = Card
                        return(
                            <ul key={id}>
                                <li className="m-2">
                                <Link to={`${id}`}>
                                <div className="bg-gray-400 p-4 flex
                                        m-4
                                        justify-center items-center
                                        shadow-md border
                                        border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                                </Link>
                                </li>
                            </ul>
                        )
                    })}
                    
                </div>
            </div>

            <div className="m-8 p-8">
            <p className="text-3xl">{category_2}</p>
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.filter((patternString) => patternString.category.includes('Design System')).map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul key={id}>
                            <li className="m-2">
                            <Link to={`${id}`}>
                            <div className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </Link>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
        </div>
        
        <div className="m-8 p-8">
            <p className="text-3xl">{category_3}</p>
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.filter((patternString) => patternString.category.includes('Performance')).map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul key={id}>
                            <li className="m-2">
                            <Link to={`${id}`}>
                            <div className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </Link>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
        </div>

        <div className="m-8 p-8">
            <p className="text-3xl">{category_4}</p>
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.filter((patternString) => patternString.category.includes('Practices')).map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul key={id}>
                            <li className="m-2">
                            <Link to={`${id}`}>
                            <div className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </Link>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
        </div>

        <div className="m-8 p-8">
            <p className="text-3xl">{category_5}</p>
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.filter((patternString) => patternString.category.includes('Advanced TypeScript')).map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul key={id}>
                            <li className="m-2">
                            <Link to={`${id}`}>    
                            <div className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </Link>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
        </div>

        <div className="m-8 p-8">
            <p className="text-3xl">{category_6}</p>
            <div className="m-8 p-8 grid grid-cols-8 gap-2 max-2xl:grid-cols-4 max-sm:grid-cols-1 ">
                {patternCard.filter((patternString) => patternString.category.includes('React Router')).map((Card) => {

                    const { id, pattern } = Card
                    return(
                        <ul key={id}>
                            <li className="m-2">
                            <Link to={`${id}`}>
                            <div className="bg-gray-400 p-4 flex
                                     m-4
                                     justify-center items-center
                                     shadow-md border
                                     border-green-500 border-6 cursor-pointer hover:scale-110 hover:rounded-lg duration-75">{pattern}</div>
                            </Link>
                            </li>
                        </ul>
                    )
                })}
                
            </div>
        </div>        
        
        </>
        
    )
}

export default HomePage;