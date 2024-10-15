import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";
import ButtonAsCleanCode from "./button.as.clean.code.tip.component";

/**react-design-patterns-app - version 41.13 - LazyAndCodeSplittingPerformance
 * - Features: 
 * 
 *     --> Adding 'lazynavigationimportsnew'    
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const LazyAndCodeSplittingPerformance = () => {

    const { CodeData } = usePatternsAppContext();

    const homecodesplitting = CodeData[187].code;
    const aboutcodesplitting = CodeData[188].code;
    const contactcodesplitting = CodeData[189].code;
    const routerreflectcodesplitting = CodeData[190].code;
    const lazynavigationcodesplitting = CodeData[191].code;
    const lazynavigationimports = CodeData[192].code;
    const lazynavigationimportsnew = CodeData[193].code;
    
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

            <p>
                some important <span className="text-white font-semibold"> Disadvantages  </span>  of <span className="text-white font-semibold"> code splitting and lazy loading </span>:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Initial Complexity </span> ( Implementing lazy loading and code splitting adds complexity to the project. Developers must handle the dynamic import of components, configure React.lazy and Suspense, and manage loading states appropriately. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Flickering </span> ( If not handled properly, lazy loading can result in flickering or unnecessary loading states, particularly when a component is loaded faster than the loader appears or if the delay is too short, as shown in the example where no loading indicator is shown when the component loads quickly. )
                </li>
                <li>
                    <span className="text-white font-semibold"> SEO Considerations </span> ( Lazy loading can sometimes interfere with SEO - Search Engine Optimization - since search engines might not crawl lazily-loaded content. However, this can be mitigated using server-side rendering or static site generation -SSG- )
                </li>
                <li>
                    <span className="text-white font-semibold"> Overhead with Small Applications </span> (For smaller applications, lazy loading might add unnecessary overhead since the cost of splitting and loading chunks could outweigh the benefits of faster initial loading. )
                </li>
            </ul>

            <p>
                lets start by a <span className="text-white font-semibold"> React Routing </span> example where this pattern can be applied, so this
                component will be compose by <span className="text-white font-semibold"> Home, About, Contact </span> sub-components and a 
                <span className="text-white font-semibold"> LazyNavigation </span>
            </p>

            <BashCode code={homecodesplitting}/>

            <p>
                Then the  <span className="text-white font-semibold"> About </span> component as follows:
            </p>

            <BashCode code={aboutcodesplitting}/>

            <p>
                And the  <span className="text-white font-semibold"> Contact </span> component as follows:
            </p>
            
            <BashCode code={contactcodesplitting}/>

            <p>
                then lets make an extra component <span className="text-white font-semibold"> RouteReflector </span>
                just to check the navigation <span className="text-white font-semibold"> pathname </span>
            </p>

            <BashCode code={routerreflectcodesplitting}/>

            <p>
                Then the Component <span className="text-white font-semibold"> LazyNavigation </span> 
                that will hold the navigation will be as follows:
            </p>

            <BashCode code={lazynavigationcodesplitting}/>

            <p>
                resulting as follows:
            </p>

            <ButtonAsCleanCode size="xl">
                <a href="https://codesandbox.io/p/sandbox/d6n8f8"> Go to LazyNavigation App ( external link )</a>
            </ButtonAsCleanCode>

            <p>
                so lets start to modify and apply <span className="text-white font-semibold"> optimization changes </span> to 
                the code base, the first step will modify the imports, the sub components currently are imported as
                follows: 
            </p>

            <BashCode code={lazynavigationimports}/>

            <p>
                the new imports using the <span className="text-white font-semibold"> Lazy </span> 
                component will be as follows:
            </p>

            <BashCode code={lazynavigationimportsnew}/>
            

            </SectionWrapper>

        </div>
    )
}

export default LazyAndCodeSplittingPerformance;
