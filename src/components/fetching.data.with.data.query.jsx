import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import FetchTopQuotes from "./api.layer.use.cases.quotes.component";
import { QueryClient, QueryClientProvider } from "react-query";


/**react-design-patterns-app - version 23.15 - FetchingDataWitReactQuery
 * - Features: 
 * 
 *     --> Starting 'server.quotes.js'  
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const queryClient = new QueryClient();

const FetchingDataWitReactQuery = () => {

    const { CodeData } = usePatternsAppContext();

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
            </SectionWrapper>
        
        </div>
    )
}

export default FetchingDataWitReactQuery;