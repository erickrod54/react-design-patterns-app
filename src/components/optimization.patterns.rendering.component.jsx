import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";
import { IngredientsComponent, IngredientsComponentOptimized, IngredientsComponentOptimizedFour, IngredientsComponentOptimizedThree, IngredientsComponentOptimizedTwo, IngredientsInfoHelper } from "./index.components";

/**react-design-patterns-app - version 48.04 - RenderingOptimization
 * - Features: 
 * 
 *     --> Rendering  'IngredientsComponentOptimizedFour ' 
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
    const ingredientslistoptimized  = CodeData[203].code;
    const ingredientsComponentoptimized  = CodeData[204].code;
    const ingredientsComponentoptimizedtwo  = CodeData[205].code;
    const stateallocationstart  = CodeData[206].code;
    const stateallocationstartaddingredient  = CodeData[207].code;
    const ingredientscomponentOptimizedthree  = CodeData[208].code;
    const addIngredientoptimized  = CodeData[209].code;
    const ingredientsinfohelperoptimized  = CodeData[210].code;
    const ingredientsComponentoptimizedfour  = CodeData[211].code;
    const ingredientsComponentoptimizedfourrender  = CodeData[212].code;

    
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

            <BashCode code={Ingredientscomponent}/>

            <p>
                resulting <span className="text-white font-semibold"> IngredientsComponent </span> in:
            </p>

            <IngredientsComponent />

            <br>
            </br>

            <p>
                by only typing while inspecting the chrome Java Console, al this components are rendered:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Ingredient rendered </span> (  Optimizes React components by memoizing them, preventing unnecessary re-renders if their props haven't changed. )
                </li>
                <li>
                    <span className="text-white font-semibold"> createIngredientsHeaderText called </span> ( Memoizes a function to maintain its reference between renders, preventing it from being recreated unless dependencies change. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Ingredient rendered </span> (  Optimizes React components by memoizing them, preventing unnecessary re-renders if their props haven't changed. )
                </li>
                <li>
                    <span className="text-white font-semibold"> createIngredientsHeaderText called </span> ( Memoizes a function to maintain its reference between renders, preventing it from being recreated unless dependencies change. )
                </li>
                <li>
                    <span className="text-white font-semibold"> IngredientsInfoHelper rendered </span> (  Optimizes React components by memoizing them, preventing unnecessary re-renders if their props haven't changed. )
                </li>
                <li>
                    <span className="text-white font-semibold"> IngredientsInfoHelper rendered </span> ( Memoizes a function to maintain its reference between renders, preventing it from being recreated unless dependencies change. )
                </li>
                <li>
                    <span className="text-white font-semibold"> IngredientsList rendered </span> (  Optimizes React components by memoizing them, preventing unnecessary re-renders if their props haven't changed. )
                </li>
                <li>
                    <span className="text-white font-semibold"> IngredientsList rendered </span> ( Memoizes a function to maintain its reference between renders, preventing it from being recreated unless dependencies change. )
                </li>
                <li>
                    <span className="text-white font-semibold">  AddIngredient rendered </span> (  Optimizes React components by memoizing them, preventing unnecessary re-renders if their props haven't changed. )
                </li>
                <li>
                    <span className="text-white font-semibold">  AddIngredient rendered </span> ( Memoizes a function to maintain its reference between renders, preventing it from being recreated unless dependencies change. )
                </li>
            </ul>


            <p>
                most of them rendered twice, but lets work in the <span className="text-white font-semibold"> IngredientsList </span> , so lets fix this 
                using <span className="text-white font-semibold"> memo </span> and <span className="text-white font-semibold"> useCallback </span>, lets 
                start by <span className="text-white font-semibold"> IngredientsList </span> by memoizing it and let called 
                <span className="text-white font-semibold"> IngredientsListOptimized </span> as follows: 
            </p>

            <BashCode code={ingredientslistoptimized}/>

            <p>
                as it seen the  <span className="text-white font-semibold"> props are drilled from a component in a upper level </span>, as 
                <span className="text-white font-semibold"> IngredientsComponent </span>, so in order to the memoization to work, this props 
                need to be look to optimized so lets call this new optimized component <span className="text-white font-semibold"> IngredientsComponentOptimized </span>
                and will be as follows:
            </p>

            <BashCode code={ingredientsComponentoptimized}/>

            <p>
                so the functionality of <span className="text-white font-semibold"> deleteIngredient  </span> get memoized 
                by using <span className="text-white font-semibold"> useCallback  
                </span> resulting <span className="text-white font-semibold"> IngredientsComponentOptimized </span> in: 
            </p>  

            <IngredientsComponentOptimized />

            <br></br>

            <p>
                in the memo library also can be seen the <span className="text-white font-semibold"> useMemo hook </span> can be use to memoize 
                <span className="text-white font-semibold"> states values </span>, in this case i have a state 
                value in the component <span className="text-white font-semibold"> deleteIngredient  </span>
                that calculates the lenght of the ingredient list in the <span className="text-white font-semibold"> IngredientsComponent </span>, 
                and the value get <span className="text-white font-semibold"> updated or not gets a re render </span> as follows:
            </p>

            <BashCode code={ingredientsComponentoptimizedtwo}/>


            <p>
                cna be noticed that <span className="text-white font-semibold"> createIngredientsHeaderText </span> is renamed as 
                <span className="text-white font-semibold"> ingredientsText </span> and is not been called as a function, because 
                internally <span className="text-white font-semibold"> useMemo hook </span> calls it, so the new compoent 
                <span className="text-white font-semibold"> IngredientsComponentOptimizedTwo </span> will result in 
            </p>

            <IngredientsComponentOptimizedTwo />

            <br>
            </br>

            <p>
                can be noticed that <span className="text-white font-semibold"> ingredientsText </span>  gets called and 
                trigger <span className="text-white font-semibold"> console.log("createIngredientsHeaderText called"); </span>
                only when a new ingredient is added
            </p>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="rendering-optimization-state-allocation"><span > State Allocation </span></p>} />
            </CustomTitleStyle>

            <p>
                 <span className="text-white font-semibold"> State Allocation </span>  is a tecnique 
                 that ensures that state is managed as <span className="text-white font-semibold"> 
                 close as possible to where it is needed, reducing 
                 unnecessary renders. </span> for this implementation the aim is look in the component 
                 and sub components states that are declared outside from where is needed, i have states 
                 that are drilled top <span className="text-white font-semibold"> IngredientsComponentOptimizedTwo </span>
                 down to <span className="text-white font-semibold"> AddIngredient </span> as can be seen here:
            </p>

            <BashCode code={stateallocationstart}/>

            <p>
                and the <span className="text-white font-semibold"> ingredient </span> state gets destructured
                to be use in <span className="text-white font-semibold"> AddIngredient </span> as follows:
            </p>

            <BashCode code={stateallocationstartaddingredient}/>

            <p>
                so lets start by the main component <span className="text-white font-semibold"> IngredientsComponentOptimizedTwo </span> 
                and will be renamed as <span className="text-white font-semibold"> IngredientsComponentOptimizedThree </span> so will 
                be allocating the <span className="text-white font-semibold"> ingredient </span> state:
            </p>

            <BashCode code={ingredientscomponentOptimizedthree}/>  

            <p>
                the <span className="text-white font-semibold"> AddIngredientOptimized </span> will be as follows  
            </p>

            <BashCode code={addIngredientoptimized}/>  

            <p>
                resulting in :
            </p>

            <IngredientsComponentOptimizedThree />

            <p>
                by only typing while inspecting the chrome Java Console, <span className="text-white font-semibold"> Ingredient rendered </span>  are rendered:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> AddIngredient  </span> ( Memoizes a function to maintain its reference between renders, preventing it from being recreated unless dependencies change. )
                </li>
            </ul>

            <p>
                getting an optimal result, however there is some more optimization that can be done 
                in this application, as ca be in the <span className="text-white font-semibold"> IngredientsInfoHelper </span>
            </p>

            <BashCode code={ingredientsinfohelper}/>

            <p>
                that even when does not receive props gets <span className="text-white font-semibold"> re render </span>
                so this can be fixed by two ways or get the subcomponent wrap with <span className="text-white font-semibold"> memo </span>
                as follows:
            </p>

            <BashCode code={ingredientsinfohelperoptimized}/>

            <p>
                or can be done by <span className="text-white font-semibold"> lifting up </span> the <span className="text-white font-semibold"> IngredientsInfoHelper </span>
                Component and passing it as a prop, so lets do it step by step, first is going to be mofify the <span className="text-white font-semibold"> IngredientsComponentOptimizedThree </span>
                by removing the <span className="text-white font-semibold"> IngredientsInfoHelper </span> and passing it as a prop, so renaming it as 
                <span className="text-white font-semibold"> IngredientsComponentOptimizedFour </span>, will be as follows:
            </p>
            
            <BashCode code={ingredientsComponentoptimizedfour}/>

            <p>
                and the <span className="text-white font-semibold"> IngredientsComponentOptimizedFour </span> will be render in the following way:
            </p>

            <BashCode code={ingredientsComponentoptimizedfourrender}/>

            <p>
                resulting <span className="text-white font-semibold"> IngredientsComponentOptimizedFour </span> as follows:   
            </p>

            <IngredientsComponentOptimizedFour ingredientsInfoHelper={IngredientsInfoHelper}/>

            </SectionWrapper>
        </div>
)

}

export default RenderingOptimization;