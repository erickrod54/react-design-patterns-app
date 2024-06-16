import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";


/**react-design-patterns-app - version 23.13 - FetchingDataWitReactQuery
 * - Features: 
 * 
 *     --> Building 'Fetching Data with ReactQuery'  
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const FetchingDataWitReactQuery = () => {

    const { CodeData } = usePatternsAppContext();

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="fetching-data-withj-react-query"><span > Fetching Data with ReactQuery </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

            </SectionWrapper>
        
        </div>
    )
}

export default FetchingDataWitReactQuery;