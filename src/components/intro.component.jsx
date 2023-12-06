import React from "react";
import CustomTitle from "./custom.title.component";

/**react-design-patterns-app - version 1.14 - IntroComponent 
 * - Features: 
 * 
 *     --> Writting intro content
 * 
 * Note: This is the first topic
 */

const IntroComponent = () => {

    return(
        <div className="flex justify-center items-center w-92">
            <div className="flex-col ">
                <p className=" text-red-300 m-4 p-4">
                    <CustomTitle title={'Introduction to React Pattterns'} />
                </p>

                <div className="m-4 p-4">
                    <p className="flex justify-center items-center">
                        Design patterns are effective solutions for common challenges
                        and some of this are specific patterns that come from actual 
                        industry experience:
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