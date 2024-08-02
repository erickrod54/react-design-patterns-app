import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import FetchTopQuotes from "./api.layer.use.cases.quotes.component";
import { QueryClient, QueryClientProvider } from "react-query";
import BashCode from "./bash.higlight.component";
import { ToastContainer } from "react-toastify";
import UpdateQuotesForm from "./api.layer.use.cases.quotes.post.update.component";
import PaginatedQuotes from "./api.layer.use.cases.quotes.pagination";
import InfiniteScrollQuotes from "./api.layer.use.cases.quotes.infinite.scroll";



/**react-design-patterns-app - version 30.07 - FetchingDataWitReactQuery
 * - Features: 
 * 
 *     --> Adding 'apicancellationcomponent' component
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
    const postresetquotes = CodeData[158].code;
    const updateformcode = CodeData[159].code;
    const serverside = CodeData[160].code;
    const updateformscoped = CodeData[161].code;
    const apiquotepagination = CodeData[162].code;
    const paginatedquotescomponent = CodeData[163].code;
    const paginatedimplementation = CodeData[164].code;
    const fetchapibycursor = CodeData[165].code;
    const infinitescrollquotes = CodeData[166].code;
    const apirequestforcancellation = CodeData[167].code;
    const apicancellationcomponent = CodeData[168].code;
    
    

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

            <p>
                first starting by creating the <span className="text-white font-semibold"> API endpoints for post and reset </span> quotes as follows:
            </p>

            <BashCode code={postresetquotes}/>

            <p>
                following a component <span className="text-white font-semibold"> UpdateQuotesForm </span> will be created in order
                to handle these new requests:
            </p>

            <BashCode code={updateformcode}/>

            <p>
                the <span className="text-white font-semibold"> server in the backend </span>  will have some 
                changes in order to perform properly the quote addition for <span className="text-white font-semibold"> reset and create </span>:
            </p>

            <BashCode code={serverside}/>

            <p>
                then the <span className="text-white font-semibold"> UpdateQuotesForm </span> get scoped, even if they are same multiple applictions 
                running at the same time, this implementation won't affect others apps, and the implementation as follows:
            </p>

            <BashCode code={updateformscoped}/>

            <p>
                resulting in the following:
            </p>
        
            <QueryClientProvider client={queryClient}>
                <ToastContainer />
                <UpdateQuotesForm />
                <FetchTopQuotes />
            </QueryClientProvider>

                <br/>
                
                <br />

                <br />

                <br />

            
            <CustomTitleStyle>
                    <CustomTitle  title={<p className="fetching-data-withj-react-query-paginated-quotes"><span > Paginated Quotes </span></p>} />
            </CustomTitleStyle>
            
            <p>
                another variant can be an <span className="text-white font-semibold"> API to paginate quotes </span>, first step will be 
                at the API, creating the endpoint
            </p>

            <BashCode code={apiquotepagination}/>

            <p>
                the <span className="text-white font-semibold"> server in the backend </span>  will be the same 
                as the prevoius app:
            </p>

            <BashCode code={serverside}/>

            <p>
                then the component that will handle the pagination <span className="text-white font-semibold"> PaginatedQuotes  </span>  
                will be as follows:
            </p>

            <BashCode code={paginatedquotescomponent}/>

            <p>
                then the <span className="text-white font-semibold"> PaginatedQuotes </span> get scoped as follows:
                ( the scope behavior will be the same as the previous app )
            </p>

            <BashCode code={paginatedimplementation}/>

            <p>
                resulting in the following:
            </p>

            
            <QueryClientProvider client={queryClient}>
                <ToastContainer />
                <PaginatedQuotes />
            </QueryClientProvider>

            <br/>
                
            <br />

            <br />

            <br />
            
            <CustomTitleStyle>
                    <CustomTitle  title={<p className="fetching-data-withj-react-query-infinite-scroll-quotes"><span > Infinite Scroll Quotes </span></p>} />
            </CustomTitleStyle>

            <p>
                also there are app the requires patterns in <span className="text-white font-semibold"> demand of data </span> so first
                it starts by <span className="text-white font-semibold"> making a new API function </span> because infinte scroll is 
                related with the <span className="text-white font-semibold"> move of the cursor </span> ( when it is moving down ), 
                as follows:
            </p>
            
            <BashCode code={fetchapibycursor}/>

            <p>
                the <span className="text-white font-semibold"> server in the backend </span>  will be the same 
                as the prevoius app. The component will change by using the <span className="text-white font-semibold"> server props 
                </span> and the <span className="text-white font-semibold"> fetchQuotesByCursor </span>  function 
                in a useEffect to control the Component Flow when the component mounts
            </p>

            


            <BashCode code={infinitescrollquotes}/>

            <p>
                the <span className="text-white font-semibold"> InfiniteScrollQuotes </span>  will render as follows:
            </p>

            <QueryClientProvider client={queryClient}>
                <ToastContainer />
                <InfiniteScrollQuotes/>
            </QueryClientProvider>

            
            <br/>
                
            <br />

            <br />

            <br />

            <CustomTitleStyle>
                    <CustomTitle  title={<p className="cancel-query-with-react-query-quotes-app"><span > Cancel Query with React Query </span></p>} />
            </CustomTitleStyle>

            <p>
                no here comes the question how to implement <span className="text-white font-semibold"> request cancellation in applications using 
                React Query and Axios</span> some goals that highlisht this implementation can be:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Multiple method to cancel API request </span> ( older method using a cancel function and the newer method utilizing an abort signal, focusing on the latter )
                </li>
                <li>
                    <span className="text-white font-semibold"> Demonstrate Practical Usage </span> ( By Building React components to manage request cancellation effectively. )
                </li>
                <li>
                    <span className="text-white font-semibold">  Scenarios for Usage </span> (Includes use cases that usefulness of request cancellation for applications with frequent API requests.)
                </li>
            </ul>

            <p>
                some <span className="text-white font-semibold"> Advantages of the Implementation </span> can be:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Efficient Resource Usage </span> ( Canceling unnecessary API requests prevents overloading servers and consuming unnecessary bandwidth. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Improved User Experience </span> ( By canceling requests based on user input - e.g., a checkbox -, the application remains responsive to user actions. )
                </li>
                <li>
                    <span className="text-white font-semibold">  Error Management </span> (The implementation handles aborted requests gracefully by catching errors and optionally displaying user-friendly messages - e.g., toast notifications -)
                </li>
                <li>
                    <span className="text-white font-semibold">  Adherence to Modern Practices </span> ( Leveraging AbortSignal aligns with modern web development standards and is supported by Axios since version 0.22.)
                </li>
                <li>
                    <span className="text-white font-semibold">  Flexibility </span> (The example demonstrates a dynamic approach where users can toggle cancellation behavior with a checkbox)
                </li>
            </ul>

            <p>
                And some <span className="text-white font-semibold"> Disadvantages of the Implementation </span> can be:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Complexity </span> ( Introducing request cancellation may increase code complexity )
                </li>
                <li>
                    <span className="text-white font-semibold"> Performance Overhead </span> ( Using state variables and managing additional hooks like useQueryClient adds a slight overhead, particularly in apps with simple APIs )
                </li>
                <li>
                    <span className="text-white font-semibold">  Limited Use Cases </span> ( Request cancellation is unnecessary for all API requests, and implementing it universally can lead to overengineering )
                </li>
                <li>
                    <span className="text-white font-semibold">  Dependency on Specific Versions </span> ( This method relies on Axios 0.22+ and React Query 3.3+, which might be incompatible with older projects.)
                </li>
                <li>
                    <span className="text-white font-semibold">  Error Handling Overhead </span> ( Displaying error messages like "request aborted" might confuse users and requires careful consideration of the user interface.)
                </li>
            </ul>

            <p>
                so as first step will be to build the <span className="text-white font-semibold"> API layer </span> that essentially will 
                behave very similar to the previous ones:
            </p>

            <BashCode code={apirequestforcancellation}/>

            <p>
                the component <span className="text-white font-semibold"> QueryCancellationWithAbortSignal </span> will focus on
                handle an <span className="text-white font-semibold"> state that handle the signal </span>, the specific query
                to abort the request <span className="text-white font-semibold"> top-aborted-quotes-abort-controller </span>
                and the aborted once catched will be displayed with a <span className="text-white font-semibold"> react-toastify </span>:
            </p>

            <BashCode code={apicancellationcomponent}/>

        
            </SectionWrapper>
        
        </div>
    )
}

export default FetchingDataWitReactQuery;