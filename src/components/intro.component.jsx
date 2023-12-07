import React from "react";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 1.17 - IntroComponent 
 * - Features: 
 * 
 *     --> Changing 'p' tag for a section to avoid p child error
 * 
 * Note: This is the first topic
 */

const IntroComponent = () => {

    const { IntroComponentData } = usePatternsAppContext();

    console.log({ IntroComponentData })

    const { title, description, items } = IntroComponentData[0];

    return(
        <div className="flex justify-center items-center w-92">
            <div className="flex-col ">
                <section className=" text-red-300 m-4 p-4">
                    <CustomTitle title={title} />
                </section>

                <div className="m-4 p-4">
                    <p className="flex justify-center items-center">
                        {description}:
                    </p>

                    <ul className="list-decimal	mt-6 ml-12">
                        {items.map((item) => {

                            const { id, challenge } = item;    
                            return(
                               <li key={id}>
                                    {challenge}
                               </li>     
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default IntroComponent;