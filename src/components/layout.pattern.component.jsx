import React from "react";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 1.20 - LayoutComponentPattern 
 * - Features: 
 * 
 *     --> Developing 'LayoutComponentPattern' concepts
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

            <img src={layoutexamples} alt="layoutexamples" className="mt-10 w-auto h-auto"/>

            <p>
                an use case can be when is developed a side navigation
                developers usually tend to include both as the html associated
                styles within component itself as the image that follows:
            </p>

            <p>
                however with layout components adopt different approaches
                by separating the actual layout styles into a dedicated component
                and only insert the specific components like the side navigation
                into the layout component
            </p>
        </section>
        </div>
    )
}

export default LayoutComponentPattern;