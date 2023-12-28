import React from "react";
import { ContainerGeneric, ContainerLoader, CurrentUser, CustomTitle } from "./index.components";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import UserInfo from "./user.info.component";
import BookInfo from "./books.info.component";

/**react-design-patterns-app - version 3.14 - ContainerPattern
 * - Features: 
 * 
 *     --> Implementing custom test using 'ContainerGeneric'.
 * 
 * Note: 'ContainerGeneric' is a more custom version of, 
 * ContainerLoader due to the props passed, can render different
 * datasets and from different endpoints
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

            <p>
                the <span className="text-white font-semibold">key is to codify a piece of code </span> 
                that <span className="text-white font-semibold">can scalate with few modifications </span>, the previous test, with small 
                modification can become highly scalable as follows for the first user:
            </p>

            <ContainerGeneric resourceUrl={'/users/1'} resourceName={'user'}>
                <UserInfo />
            </ContainerGeneric>

            <p>
                and for the second user will be as this:
            </p>
            
            <ContainerGeneric resourceUrl={'/users/2'} resourceName={'user'}>
                <UserInfo />
            </ContainerGeneric>

            <p>
                and <span className="text-white font-semibold">rehusing </span> this component for example for books:
            </p>

            <ContainerGeneric resourceUrl={'/books/1'} resourceName={'book'}>
                <BookInfo/>
            </ContainerGeneric>

            <p>
                can be notice that the pattern for the resourceName follows a 
                singular notation ( this is because is getting rendered the 
                single element of each dataset in the end component, that's 
                why it is not use the plural, and technical reasons are in 
                consideration by the prop in the end component), the correct
                use of names on endpoints and props is also very important
            </p>

            </SectionWrapper>
        </div>
    )
}

export default ContainerPattern;