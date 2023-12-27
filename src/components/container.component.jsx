import React from "react";
import { ContainerLoader, CurrentUser, CustomTitle } from "./index.components";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import UserInfo from "./user.info.component";

/**react-design-patterns-app - version 3.13 - ContainerPattern
 * - Features: 
 * 
 *     --> Implementing custom test using 'ContainerLoader'.
 * 
 * Note: ContainerLoader is a custom pattern and code be 
 * modified later to make it even more custom
 */

const ContainerPattern = () => {

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="container-pattern"><span >Container Pattern</span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
            <p> 
                Container components patterns are React components responsible 
                for <span className="text-white font-semibold"> managing data </span> 
                loading and handling on <span className="text-white font-semibold"> behalf of their child components. </span> 
                Instead of each child component managing its data retrieval independently, <span className="text-white font-semibold"> container 
                components extract and centralize this logic </span>, allowing multiple child components to 
                <span className="text-white font-semibold"> share the same data-loading process. </span> 
            </p>

            <p>
                The <span className="text-white font-semibold"> primary goal is to shield child components from the specifics of data management </span> 
                by extracting data-loading logic into dedicated containers, ensuring components remain <span className="text-white font-semibold"> unaware 
                of data sources and management processes.</span> This approach promotes <span className="text-white font-semibold"> reusability, separation of concerns, 
                and simplifies component logic </span> by handling data retrieval and passing it down to 
                <span className="text-white font-semibold"> child components via props. </span>
            </p>

            <p>
                the following list is is <span className="text-white font-semibold"> compose </span> by a container <span className="text-white font-semibold"> {'<CurrentUser>'} </span>
                that will perform the following data sourcing and handling:
                
            </p>

            <ul>
                <li>
                    <span className="text-white font-semibold"> will create the state of the user </span>
                </li>
                <li>
                    <span className="text-white font-semibold"> receive the user data from the server </span>
                </li>
                <li>
                <span className="text-white font-semibold"> mutate that data and provide it to the children </span>
                </li>
            </ul>

            <p>
                 that data to the children in this case <span className="text-white font-semibold">{'<UserInfo />'} </span>, 
                 resulting as follows:
            </p>

            <CurrentUser>
                <UserInfo />
            </CurrentUser>

            <p>
                this can be a custom test using custom user info from 3 records, being the third one, resulting as follows:
            </p>

            <ContainerLoader userId={'3'}>
                <UserInfo/>
            </ContainerLoader>

            </SectionWrapper>
        </div>
    )
}

export default ContainerPattern;