import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";
import UsersApi from "./user.api.before.component";
import UsersApiStates from "./user.api.handling.states.component";
import UsersApiStatesHelper from "./user.api.handling.helper.states.component";
import UsersApiStatesConstants from "./user.api.handling.constant.states.component";
import { UsersApiStatesObject } from "./index.components";


/**react-design-patterns-app - version 21.06 - ApiLayerAndAsync
 * - Features: 
 * 
 *     --> Adding 'UsersApiStatesObject'
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const ApiLayerAndAsync = () => {

    const { CodeData } = usePatternsAppContext();
    
    const apioperationslayercode = CodeData[132].code;
    const fetchuserscode = CodeData[133].code;
    const usersapicode = CodeData[134].code;
    const usersapistatescode = CodeData[135].code;
    const usersapistateshelperscode = CodeData[136].code;
    const withasynccode = CodeData[137].code;
    const constantscode = CodeData[138].code;
    const usersapistatesconstantscode = CodeData[139].code;
    const defaultapistatuscode = CodeData[140].code;
    const apistatusobjectcode = CodeData[141].code;

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="api-layer-and-async-operations"><span > Api Layer and Async Operations </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
                <p>
                    the main idea of having an <span className="text-white font-semibold"> API Layer </span>,
                    between <span className="text-white font-semibold"> back-end server </span> and 
                    <span className="text-white font-semibold"> front-end components </span> is in order 
                    to provide <span className="text-white font-semibold"> separation of concerns, 
                    flexible, scalable and readable app arquitecture </span> that will show how components 
                    <span className="text-white font-semibold"> consume </span> and are being 
                    <span className="text-white font-semibold"> provide </span> of resources
                </p>

                <p>
                    in order to achieve the <span className="text-white font-semibold"> API Layer </span>,
                    steps can be performed, these can <span className="text-white font-semibold"> 
                    change depending on the implementations </span>, but follows almost the same 
                    principles:
                </p>

                <ul className="list-white-space">
                    <li>
                        <span className="text-white font-semibold"> Operations Layer </span> ( this is the first layer, and will hold crud operations as <span className="text-white font-semibold"> get, delete, post, patch, put </span> )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Fetching Layer </span> ( this layer will structure the url/s, so in this sense i can apply it for custom cases )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Render Layer </span> ( the render layer will be the component that will receive the fetch data and render  )
                    </li>
                </ul>

               <CustomTitleStyle>
                   <CustomTitle  title={<p className="api-operations-layer"><span > Operations Layer </span></p>} />
               </CustomTitleStyle>

               <p>
                   this is the first layer, and will hold crud operations as <span className="text-white font-semibold"> get, delete, post, patch, put </span>.
                   These operations correspond to the common CRUD (Create, Read, Update, Delete) actions in a RESTful API:
               </p>

               <ul className="list-white-space">
                    <li>
                        <span className="text-white font-semibold"> get </span> ( Retrieves data from the specified endpoint )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> delete </span> ( Removes data from the specified endpoint )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> post </span> ( Sends new data to the specified endpoint )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> patch </span> ( Partially updates data at the specified endpoint. )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> put </span> ( Fully updates data at the specified endpoint )
                    </li>
                </ul>

                <p>
                    so the api operations layer will be as follows ( crud operations ):
                </p>

                <BashCode code={apioperationslayercode}/>

                <CustomTitleStyle>
                   <CustomTitle  title={<p className="api-fetching-layer"><span > Fetching Layer </span></p>} />
               </CustomTitleStyle>

               <p>
                    the <span className="text-white font-semibold"> Fetching Layer </span> is going to be use for 
                    build the urls/s and adapting them to custom cases ( this case will be base on typicode api's ), 
                    as follows:
               </p>

                <BashCode code={fetchuserscode}/>

                <CustomTitleStyle>
                   <CustomTitle  title={<p className="api-fetching-layer"><span > API Render Layer </span></p>} />
               </CustomTitleStyle>

               <p>
                  the render layer will be the <span className="text-white font-semibold"> Component </span> that 
                  will receive the <span className="text-white font-semibold">fetch data </span> and render the data,
                  and will be as follows: 
               </p>

                <BashCode code={usersapicode}/>

                <p>
                    after this three layers will result in:
                </p>

                <UsersApi />

                <CustomTitleStyle>
                   <CustomTitle  title={<p className="api-states"><span > API States </span></p>} />
               </CustomTitleStyle>

                <p>
                    now that the <span className="text-white font-semibold"> three layers </span> are built let's 
                    handle <span className="text-white font-semibold"> API states </span>, and they can be:
                </p>

                <ul className="list-white-space">
                    <li>
                        <span className="text-white font-semibold"> IDDLE </span> ( waiting for action )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> PENDING </span> ( action in progress )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> SUCCESS </span> ( action completed successfully )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> ERROR </span> ( action failed )
                    </li>
                </ul>

                <p>
                    the first approach can be by defining this <span className="text-white font-semibold"> API states </span>
                    and handling by using <span className="text-white font-semibold"> try-catch </span> statements, as follows: 
                </p>

                <BashCode code={usersapistatescode}/>

                <p>
                    resulting in:
                </p>

                <UsersApiStates />

                <p>
                    by inspecting the java console can be seen how the states are being displayed.
                </p>

                <p>
                    the second approach can be by using a <span className="text-white font-semibold"> helper function </span>
                    to handle the states change, response and the <span className="text-white font-semibold"> try-catch </span> 
                    statements, as follows: 
                </p>
                
                <BashCode code={usersapistateshelperscode}/>

                <p>
                    And the <span className="text-white font-semibold"> helper function </span> will be as 
                    follows: 
                </p>

                <BashCode code={withasynccode}/>

                <p>
                    And the <span className="text-white font-semibold"> UsersApiStatesHelper </span> will be as 
                    follows: 
                </p>

                <UsersApiStatesHelper />

                <p>
                    And the <span className="text-white font-semibold"> status </span> handling can be done in 
                    a more efficient manner by making a different file and defining the constants, as follows: 
                </p>

                <BashCode code={constantscode}/>
                
                <p>
                    And the refactoring in the main component will be by 
                    <span className="text-white font-semibold"> importing and replacing </span> the
                    strings for the constants in each place: 
                </p>

                <BashCode code={usersapistatesconstantscode}/>

                <p>
                    resulting in:
                </p>

                <UsersApiStatesConstants />

                <p>
                    this also can be performormed in a <span className="text-white font-semibold"> object </span> 
                    version as follows:
                </p>

                <BashCode code={defaultapistatuscode}/>


                <p>
                    and the <span className="text-white font-semibold"> object </span> 
                    implementation in the component will be as follows:
                </p>

                <BashCode code={apistatusobjectcode}/>

                <p>
                    resulting <span className="text-white font-semibold"> UsersApiStatesObject </span> 
                    as follows:
                </p>

                <UsersApiStatesObject />

                <p>
                    and this component gets now optimized by <span className="text-white font-semibold"> apiStatus </span> 
                    object that will be in a <span className="text-white font-semibold">  constants directory </span>,
                    and the Component <span className="text-white font-semibold"> UsersApiStatesObject </span> will 
                    consume data from that directory
                </p>

            </SectionWrapper>
        </div>

    )
}

export default ApiLayerAndAsync;