import React from "react";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 1.18 - LayoutComponentPattern 
 * - Features: 
 * 
 *     --> Destructuring and testing the image
 * 
 * Note: This is the first topic
 */

const LayoutComponentPattern = () => {

    const { ImagesData } = usePatternsAppContext();

    
    const { list } = ImagesData[0]
    
    const layoutexamples = list[0].image
    
    console.log({layoutexamples})

    return(
        <div>
        <div className="text-yellow-100 underline">
            <CustomTitle title={'layout component pattern'} />
        </div>
        
        <section className="mt-12 first-letter:capitalize text-lg">
            <p>
                layout components focus on organizing other
                components within a web page, some examples
                of layout components can be:
            </p>
            
            <ul className="m-4 p-4 list-decimal">
                <li>
                    Split Screen
                </li>
                <li>
                    List
                </li>
                <li>
                    Modals
                </li>
            </ul>
            
            <p>
                as can be seen in the following picture:
            </p>

        </section>
        </div>
    )
}

export default LayoutComponentPattern;