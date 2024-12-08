import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";
import Search from "./optimization.patterns.search.component.debouncing";
import SearchDebounce from "./optimization.patterns.search.component.debouncing.implemented";

/**react-design-patterns-app - version 50.09 - DebouncingExecutions
 * - Features: 
 * 
 *     --> Rendering 'SearchDebounce'  
 *
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const DebouncingExecutions = () => {

    const { CodeData } = usePatternsAppContext();

    const searchcomponent = CodeData[217].code;
    const apirequest = CodeData[149].code;
    const debouncing = CodeData[218].code;
    const seaerchdebouncing = CodeData[219].code;


    
    
    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="debouncing-executions"><span > Debouncing Executions </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper> 
                <p>
                    The main goal of implementing <span className="text-white font-semibold"> debouncing </span> is to optimize performance and reduce 
                    <span className="text-white font-semibold"> unnecessary function executions when handling high-frequency events </span>, such as user 
                     ensuring that the functions runs only after a specified time duration (e.g., 500ms).
                </p>

            <p>
                some important <span className="text-white font-semibold"> Advantages </span> are:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Prevents Unnecessary Function Executions </span> ( Ensures that a function runs only once after user stops triggering it, reducing overhead )
                </li>
                <li>
                    <span className="text-white font-semibold"> Optimizes API Requests </span> ( Reduces the number of calls to external services - e.g., search API -, making applications more efficient. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Improves Performance </span> ( Reduces excessive computations, making UI interactions smoother. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Enhances User Experience </span> ( Prevents lag or delays caused by multiple function executions )
                </li>
            </ul>

            <p>
                some important <span className="text-white font-semibold"> Disadvantages </span> are:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Delayed Execution </span> ( The function only executes after the delay period, which may cause a slight lag in real-time applications. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Potentially Skipped Updates </span> ( If the user keeps interacting continuously, the function may never execute. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Not Suitable for All Cases </span> ( For cases like real-time mouse tracking, throttling may be a better alternative. )
                </li>
            </ul>

            <p>
                a good implementation can be done in a  <span className="text-white font-semibold"> Search </span> component, that without 
                debouncing can fall in the disvantages from above, cheking under network chrome develepover tools tab, the component will be
                <span className="text-white font-semibold"> requests as the typing goes </span> in one single search, the component will be 
                as follows:
            </p>

            <BashCode code={searchcomponent}/>

            <p>
                and the API, will be a meals - API used in a previous app as it is <span className="text-white font-semibold"> Search </span> component, that without 
                debouncing can fall in the disvantages from above, the component will be as follows:
            </p>

            <BashCode code={apirequest}/>

            <p>
                resulting <span className="text-white font-semibold"> Search </span> component as follows:
            </p>

            <Search />

            <p>
                in this case function <span className="text-white font-semibold"> searchMeals </span> executes memoized to 
                <span className="text-white font-semibold"> fetchMeals </span>, but even when the function is memoized 
                <span className="text-white font-semibold"> as user input in a search bar </span> makes it a 
                <span className="text-white font-semibold"> high-frequency event </span>, that eventually 
                as the app scale can make it not optimal, this can be fixed by a <span className="text-white font-semibold"> debouncing </span>  
                util function, as follows:
            </p>

            <BashCode code={debouncing}/>

            <p>
                the debouncing will be implementated at  <span className="text-white font-semibold"> initSearchApiRequest  </span> 
                because makes <span className="text-white font-semibold"> high frequency API requests, </span> so debouncing prevents 
                <span className="text-white font-semibold"> excessive API calls on every character input, reducing 
                unnecessary network requests and improving efficiency.</span>
            </p>
            

            <BashCode code={seaerchdebouncing}/>

            <p>
                resulting <span className="text-white font-semibold"> SearchDebounce  </span> in:
            </p>

            <SearchDebounce />

            <p>
                and cheking in the network tab will be less requests by user interaction
            </p>
            

            </ SectionWrapper>
        </div>
        )

}

export default DebouncingExecutions;
