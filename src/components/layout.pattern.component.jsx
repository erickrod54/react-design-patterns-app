import React from "react";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 2.01 - LayoutComponentPattern 
 * - Features: 
 * 
 *     --> Developing 'LayoutComponentPattern' concepts
 *         in progress  
 * 
 * Note: This is the first topic
 */

const LayoutComponentPattern = () => {

    const { ImagesData } = usePatternsAppContext();

    
    const { list } = ImagesData[0]
    
    const layoutexamples = list[0].image;
    const sidebarexample = list[1].image;

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

            <p className="mt-6">
                an use case can be when is developed a side navigation
                developers usually tend to include both as the html associated
                styles within component itself as the image that follows:
            </p>

            <img src={sidebarexample} alt="layoutexamples" className="mt-10 w-auto h-auto"/>

            <p className="mt-6">
                however with layout components adopt different approaches
                by separating the actual layout styles into a dedicated component
                and only insert the specific components like the side navigation
                into the layout component
            </p>

            <p className="mt-6 mb-8 first-letter:capitalize">
                the <span className="text-white font-semibold">main advantage of using layout components </span> 
                is that the individual components, the core content of a web
                page <span className="text-white font-semibold">should be unaware and unconcerned about their 
                precise location within the page structure</span>.  
            </p>
            
        </section>
        </div>
    )
}

export default LayoutComponentPattern;