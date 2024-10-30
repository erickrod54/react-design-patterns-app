import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";

/**react-design-patterns-app - version 44.03 - RenderingOptimization
 * - Features: 
 * 
 *     --> Adding  'ingredientsinfohelper'     
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const RenderingOptimization = () => {

    const { CodeData } = usePatternsAppContext();

    const ingredientsinfohelper = CodeData[198].code;
    
    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="rendering-optimization"><span > Rendering Optimization </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

            <p>
            <span className="text-white font-semibold"> Fast Rendering </span>  is part of a rich user experience, in order to achieve this experience 
                it will be covered two patterns:
            </p>


            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> memo </span> (  Optimizes React components by memoizing them, preventing unnecessary re-renders if their props haven't changed. )
                </li>
                <li>
                    <span className="text-white font-semibold"> useCallback </span> ( Memoizes a function to maintain its reference between renders, preventing it from being recreated unless dependencies change. )
                </li>
            </ul>

            <p>
                So lets make the implementation that will involves creating a simple application for <span className="text-white font-semibold"> 
                managing a list of ingredients (adding/removing) </span> and <span className="text-white font-semibold"> optimizing its performance </span>
                by <span className="text-white font-semibold"> addressing unnecessary re-renders. </span> React's <span className="text-white font-semibold"> 
                memo and useCallback </span> are used to <span className="text-white font-semibold"> optimize components and prevent avoidable updates by preserving 
                referential integrity and minimizing wasted renders. </span>
            </p>

            <p>
                first lets start by the subcomponents, <span className="text-white font-semibold"> IngredientsInfoHelper </span> its a component that will 
                have a help menu icon, and will be as follows:
            </p>

            <BashCode code={ingredientsinfohelper}/>
            
    
            </SectionWrapper>
        </div>
)

}

export default RenderingOptimization;