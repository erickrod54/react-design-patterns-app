import React from "react";
import { CustomTitle } from "./index.components";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 3.09 - ContainerPattern
 * - Features: 
 * 
 *     --> Developing 'Container Pattern' concept
 * 
 * Note: the cards components with the card information
 * will be displayed here
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
                by extracting data-loading logic into dedicated containers, ensuring components remain unaware 
                of data sources and management processes. This approach promotes <span className="text-white font-semibold"> reusability, separation of concerns, 
                and simplifies component logic </span> by handling data retrieval and passing it down to 
                <span className="text-white font-semibold"> child components via props. </span>
            </p>
            </SectionWrapper>
        </div>
    )
}

export default ContainerPattern;