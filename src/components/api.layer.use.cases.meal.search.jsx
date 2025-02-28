import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";
import SearchMealComponent from "./api.layer.use.cases.meal.search.component";
import SearchMealComponentErrorLogger from "./api.layer.use.cases.meal.search.error.logger.component";

/**react-design-patterns-app - version 23.13 - UseCasesMealApiSearch
 * - Features: 
 * 
 *     --> Rendering 'SearchMealComponentErrorLogger'  
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const UseCasesMealApiSearch = () => {

    const { CodeData } = usePatternsAppContext();

    const apirequestcancellation = CodeData[148].code;
    const apirequest = CodeData[149].code;
    const searchmealcomponentandhook = CodeData[150].code;
    const withlogger = CodeData[151].code;
    const searchmealserrorlogin = CodeData[152].code;
    const searchmealserrorlogincomponent = CodeData[153].code;

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="use-cases-meal-search"><span > Use Cases Meal Api Search </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

                <p>
                    In this section will be covered the use case of <span className="text-white font-semibold"> API cancellation </span> of an 
                    API request. and will be demonsatrated by developing a  <span className="text-white font-semibold"> 'SearchMealComponent' </span> 
                    that will use a Meals API and a search feature
                </p>

                <p>
                    the main goal of this component  <span className="text-white font-semibold"> 'SearchMealComponent' </span> component
                    is to implement <span className="text-white font-semibold"> API request cancellation </span> in a web application.
                    this ensures that outdated  API requests are cancelled when a new request is initiated. Avoiding redundant precessing
                    and enhancing the user experience.
                </p>

                <p>
                    so the code below will demonstrate how to implement <span className="text-white font-semibold"> API request cancellation </span>
                    by using axios in a React application as follows:
                </p>

                <BashCode code={apirequestcancellation}/>

                <p>
                    By integrating request cancellation at the API layer <span className="text-white font-semibold"> (using axios in this case) </span> 
                    the implementation becomes rehusable and and easily maintainable, even if the underlying HTTP client is replaced. And for the 
                    <span className="text=white-font-semibold"> API request </span> in the app side will be as follows:
                </p>

                <BashCode code={apirequest}/>

                <p>
                    having this, let's build the hook to fetch the data from the API and the component that will render the App functionality, as follows: 
                </p>

                <BashCode code={searchmealcomponentandhook}/>

                <p>
                    Resulting <span className="text-white font-semibold"> SearchMealComponent </span> in the following
                </p>

                <SearchMealComponent />

                <p>
                    a variation to handle errors from the <span className="text-white font-semibold"> API Layer </span> can start as
                    follows:
                </p>

                <BashCode code={withlogger}/>

                <p>
                    and the request will be as follows:
                </p>
                
                <BashCode code={searchmealserrorlogin}/>

                <p>
                    and the implementation in the component <span className="text-white font-semibold"> SearchMealComponentErrorLogger </span> 
                    will be as follows:
                </p>
                 
                <BashCode code={searchmealserrorlogincomponent}/>
                
                <p>
                    resulting the component <span className="text-white font-semibold"> SearchMealComponentErrorLogger </span> as follows
                    <span className="text-white font-semibold"> (check the console for error handling ) </span>:
                </p>

                <SearchMealComponentErrorLogger />
                
            </SectionWrapper>
        </div>
    )
}

export default UseCasesMealApiSearch;
