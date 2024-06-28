import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import FetchTopQuotes from "./api.layer.use.cases.quotes.component";
import { QueryClient, QueryClientProvider } from "react-query";
import BashCode from "./bash.higlight.component";
import { ToastContainer } from "react-toastify";


/**react-design-patterns-app - version 25.08 - FetchingDataWitReactQuery
 * - Features: 
 * 
 *     --> Starting Updating and Reseting Data for FetchTopQuotes
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const queryClient = new QueryClient();

const FetchingDataWitReactQuery = () => {

    const { CodeData } = usePatternsAppContext();

    const serverquotesjs = CodeData[154].code;
    const topquotesapirequest = CodeData[155].code;
    const withlogger = CodeData[151].code;
    const fetchtopquotes = CodeData[156].code;


    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="fetching-data-withj-react-query"><span > Fetching Data with ReactQuery </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
                
                <p>
                    In this section is going to be covered how <span className="text-white font-semibold"> manage API calls effectively </span>
                    and for this implementation is going to be used <span className="text-white font-semibold"> QueryClientProvider </span>
                    that belongs to the library <span className="text-white font-semibold"> react-query </span>
                </p>

                <p>
                    First the data that will be consume by this app will come from an express js server 
                    <span className="text-white font-semibold"> server.quotes.js </span> as follows:
                </p>

                <BashCode code={serverquotesjs}/>

                <p>
                    then it will br followed by making the API request:
                </p>

                <BashCode code={topquotesapirequest}/>

                <p>
                    As the <span className="text-white font-semibold"> API layer </span> it will be used 
                    the same that was use in <span className="text-white font-semibold"> SearchMeal </span>
                    use case, with the <span className="text-white font-semibold"> withlogger </span> variation:
                </p>
                
                <BashCode code={withlogger}/>

                <p>
                    In order to render <span className="text-white font-semibold"> FetchTopQuotes </span>
                    and manage the API i have to provide a <span className="text-white font-semibold"> client </span>  
                    prop and wrap the component using <span className="text-white font-semibold"> QueryClientProvider </span>
                    as follows:
                </p>

                <BashCode code={fetchtopquotes}/>

                <p>
                    Resulting in:
                </p>

                <QueryClientProvider client={queryClient}>
                    <FetchTopQuotes />
                </QueryClientProvider>

                <br/>
                
                <br />

                <br />

                <p>
                    also can be a variant by adding a <span className="text-white font-semibold"> ToastContainer </span>
                    that will add an error handling, resulting the component in: 
                </p>

                <QueryClientProvider client={queryClient}>
                    <ToastContainer />
                    <FetchTopQuotes />
                </QueryClientProvider>

                <br/>
                
                <br />

                <br />

                <br />

                <CustomTitleStyle>
                    <CustomTitle  title={<p className="fetching-data-withj-react-query-updating"><span > Fetching Data with ReactQuery with Creating and Reseting Data</span></p>} />
                </CustomTitleStyle>

                <p>
                    A variant that can include operations as <span className="text-white font-semibold"> creating, and resting quotes </span> can be done 
                    by first implementing an <span className="text-white font-semibold"> useMutation hook </span> and the main 
                    focus will be on creating a functional React component that <span className="text-white font-semibold"> 
                    interacts with an API to post new data </span>, plus <span className="text-white font-semibold"> reset existing data, and handle optimistic 
                    updates </span> in a React Query workflow
                </p>
                
            </SectionWrapper>
        
        </div>
    )
}

export default FetchingDataWitReactQuery;