import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
/**this component is testing */
//import SearchMealComponent from "./api.layer.use.cases.meal.search.component";


/**react-design-patterns-app - version 22.11 - UseCasesMealApiSearch
 * - Features: 
 * 
 *     --> Testing 'SearchMealComponent'  
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const UseCasesMealApiSearch = () => {

    const { CodeData } = usePatternsAppContext();
    

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="use-cases-meal-search"><span > Use Cases Meal Api Search </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
                
            </SectionWrapper>
        </div>
    )
}

export default UseCasesMealApiSearch;
