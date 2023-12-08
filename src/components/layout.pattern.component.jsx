import React from "react";
import CustomTitle from "./custom.title.component";

/**react-design-patterns-app - version 1.17 - LayoutComponentPattern 
 * - Features: 
 * 
 *     --> Starting 'LayoutComponentPattern'
 * 
 * Note: This is the first topic
 */

const LayoutComponentPattern = () => {

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