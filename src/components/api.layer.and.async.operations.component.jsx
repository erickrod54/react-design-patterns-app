import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";

/**react-design-patterns-app - version 19.22 - ApiLayerAndAsync
 * - Features: 
 * 
 *     --> Developing 'Steps for the API' Layer 
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const ApiLayerAndAsync = () => {
    
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

            </SectionWrapper>
        </div>

    )
}

export default ApiLayerAndAsync;