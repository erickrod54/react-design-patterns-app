import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";

/**react-design-patterns-app - version 44.18 - RenderingOptimization
 * - Features: 
 * 
 *     --> Starting 'Ingredientscomponent'     
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const RenderingOptimization = () => {

    const { CodeData } = usePatternsAppContext();

    const ingredientsinfohelper = CodeData[198].code;
    const ingredientslist = CodeData[199].code;
    const addIngredient = CodeData[200].code;
    const initialIngredients  = CodeData[201].code;
    const Ingredientscomponent  = CodeData[202].code;
    
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

            <p>
                then will follow the ingredients list <span className="text-white font-semibold"> IngredientsList </span> component that 
                will display the ingredient <span className="text-white font-semibold"> - ingredients prop -</span> name and also will have the feature to
                delete it <span className="text-white font-semibold"> deleteIngredient </span> and will be as follows:  
            </p>

            <BashCode code={ingredientslist}/>

            <p>
                then will follow the feature to add a new ingrdient that will be a sub component <span className="text-white font-semibold"> AddIngredient </span> 
                and this also will be tracked ( to check how many renders ) with a <span className="text-white font-semibold"> console log </span> like the previous 
                sub components
            </p>
            
            <BashCode code={addIngredient}/>

            <p>
                then initial data <span className="text-white font-semibold"> initialIngredients </span> will be as follows:
            </p>

            <BashCode code={initialIngredients}/>

            <p>
                And the component will be composed by the sub components <span className="text-white font-semibold"> IngredientsComponent  </span>,
                this component will drill props to the <span className="text-white font-semibold"> IngredientsList </span>, the 
                <span className="text-white font-semibold"> IngredientsInfoHelper </span> , and the 
                <span className="text-white font-semibold"> AddIngredient </span>  
                will be as follows:
            </p>

       

            
            </SectionWrapper>
        </div>
)

}

export default RenderingOptimization;