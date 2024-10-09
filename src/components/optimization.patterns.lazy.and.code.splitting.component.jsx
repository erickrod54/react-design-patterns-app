import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

 
/**react-design-patterns-app - version 40.10 - LazyAndCodeSplittingPerformance
 * - Features: 
 * 
 *     --> Adding Advantages of Code Splitting and Lazy Loading    
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const LazyAndCodeSplittingPerformance = () => {

    const { CodeData } = usePatternsAppContext();
    
    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="lazy-and-code-splitting-performance"><span > Lazy and Code Splitting Optimization </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

            <p>
                The main goal is how to optimize a React applications by implementing <span className="text-white font-semibold"> code splitting and lazy loading </span> 
                to improve <span className="text-white font-semibold"> loading performance. </span> These techniques can help by loading only the <span className="text-white font-semibold"> 
                code that is necessary </span> for the current page, <span className="text-white font-semibold"> instead of downloading the entire application bundle upfront</span> ,
                 which can be inefficient and slow down the initial page load.
            </p>

            <p>
                some important <span className="text-white font-semibold"> Goals </span>  of <span className="text-white font-semibold"> code splitting and lazy loading </span>:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Improved Application Loading Performance </span> (  By splitting the code into smaller bundles that can be loaded on-demand )
                </li>
                <li>
                    <span className="text-white font-semibold"> Demonstrating Lazy Loading in React </span> ( React's React.lazy and Suspense components to load components dynamically as needed, rather than loading all components upfront )
                </li>
                <li>
                    <span className="text-white font-semibold"> Introducing Delayed Loading Indicators </span> ( introduces a method for adding a delayed loading indicator, so the user is only shown a loader if the content takes a noticeable amount of time to load )
                </li>
            </ul>

            <p>
                some important <span className="text-white font-semibold"> Advantages </span>  of <span className="text-white font-semibold"> code splitting and lazy loading </span>:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Faster Initial Load </span> ( loading only the code necessary for the initial view - e.g., the home page -, the application can load more quickly, improving user experience, especially for large applications. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Reduced Bandwidth Usage </span> ( Users only download the resources they need at any given moment, saving bandwidth, which can be particularly beneficial for users on slower internet connections or those with limited data plan)
                </li>
                <li>
                    <span className="text-white font-semibold"> Better User Experience </span> ( Loading pages on-demand helps reduce wait times for users, and with a loading spinner, users can be given feedback that content is loading. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Efficient Code Management </span> ( Instead of having a single massive JavaScript file, code splitting allows for modular, maintainable chunks that can be updated independently as the application evolves. )
                </li>
            </ul>

            </SectionWrapper>

        </div>
    )
}

export default LazyAndCodeSplittingPerformance;