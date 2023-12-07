import React from "react";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 1.15 - IntroComponent 
 * - Features: 
 * 
 *     --> Destructuring IntroData
 * 
 * Note: This is the first topic
 */

const IntroComponent = () => {

    const { IntroComponentData } = usePatternsAppContext();

    console.log({ IntroComponentData })

    const { title, description } = IntroComponentData[0];

    return(
        <div className="flex justify-center items-center w-92">
            <div className="flex-col ">
                <p className=" text-red-300 m-4 p-4">
                    <CustomTitle title={title} />
                </p>

                <div className="m-4 p-4">
                    <p className="flex justify-center items-center">
                        {description}:
                    </p>

                    <ul className="list-decimal	mt-6 ml-12">
                        <li>
                            Design patterns that are specific to React
                        </li>
                        <li>
                            Best practices to magaging form state
                        </li>
                        <li>
                            Functional Programming in the context of react
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default IntroComponent;