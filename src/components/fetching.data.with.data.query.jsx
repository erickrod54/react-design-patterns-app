import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import FetchTopQuotes from "./api.layer.use.cases.quotes.component";
import { QueryClient, QueryClientProvider } from "react-query";
import BashCode from "./bash.higlight.component";
import { ToastContainer } from "react-toastify";


/**react-design-patterns-app - version 25.10 - FetchingDataWitReactQuery
 * - Features: 
 * 
 *     --> Adding Updating and Reseting Disadvantages with useMutation
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

                <p>
                    Some important <span className="text-white font-semibold"> advantages </span> can be:
                </p>

                <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Leverages React Query's Features </span> ( Simplifies server state management by using useMutation and queryClient for caching and invalidation and automatically handles background fetching and cache updates. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Encapsulated State Management </span> ( Keeps form and mutation logic self-contained, promoting modularity and code reuse )
                </li>
                <li>
                    <span className="text-white font-semibold"> Error Handling and Feedback </span> (Includes client-side validation and feedback mechanisms - e.g., alerts and toasts- for a better user experience.)
                </li>
                <li>
                    <span className="text-white font-semibold"> Optimistic Updates </span> ( Uses queryClient.invalidateQueries to refresh the UI and show updated data immediately after successful mutations. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Scalable Structure </span> ( eparates API logic from UI components, making it easier to maintain and expand )
                </li>
            </ul>

            <p>
                  And some <span className="text-white font-semibold"> disadvantages </span> can be:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Verbose Code </span> ( The implementation is relatively verbose, which might make it harder for beginners to follow )
                </li>
                <li>
                    <span className="text-white font-semibold"> Error Handling Could Be Improved </span> ( Only basic error feedback - e.g., alerts - is provided. More robust error handling - e.g., error boundaries or detailed logging - could enhance resilience )
                </li>
                <li>
                    <span className="text-white font-semibold"> Potential Over-Reliance on invalidateQueries </span> (Frequent invalidations can cause unnecessary re-fetching and potential performance bottlenecks if the dataset is large or the API is slow )
                </li>
                <li>
                    <span className="text-white font-semibold"> Basic Styling </span> ( Uses styled components with minimal explanation, which might not align with a broader UI/UX framework )
                </li>
                <li>
                    <span className="text-white font-semibold"> Limited Focus on React Query Features </span> ( not fully explore other features like onError, retry, or optimistic updates, which could enhance functionality )
                </li>
            </ul>
                
            </SectionWrapper>
        
        </div>
    )
}

export default FetchingDataWitReactQuery;