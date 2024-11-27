import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 48.10 - RenderingOptimization
 * - Features: 
 * 
 *     --> Developing  'ThrottlingRendering Disadvantages' 
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const ThrottlingRendering = () => {

    const { CodeData } = usePatternsAppContext();

    
    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="trottling-rendering-optimization"><span > Trottling Rendering Optimization </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper> 
                <p>
                    The <span className="text-white font-semibold"> How the Implementation Works </span> of this implementation is to optimize performance by 
                    controlling <span className="text-white font-semibold"> how often a function (callback)  executes </span>
                    in response to <span className="text-white font-semibold"> high-frequency events like mousemove. </span> This prevents 
                    unnecessary function executions that can slow down the application.
                    <span className="text-white font-semibold"> The throttling technique ensures that the function runs at most once in a specified time interval,</span> improving efficiency.
                </p>

                <p>
                    Some <span className="text-white font-semibold"> Advantages </span> of this implementation can be:
                </p>
                
                <ul className="list-white-space">
                    <li>
                        <span className="text-white font-semibold"> Performance Optimization </span> (  Reduces unnecessary function executions, preventing performance bottlenecks. )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Better User Experience </span> ( Smooths out UI interactions by reducing rapid updates. )
                    </li>
                    <li>
                        <span className="text-white font-semibold">  Prevents Event Overload </span> ( Stops the system from being overwhelmed by excessive event calls. )
                    </li>
                    <li>
                        <span className="text-white font-semibold">  Customizable </span> ( The throttle function allows for adjustable time intervals, making it adaptable to different use cases.)
                    </li>
                </ul>

                <p>
                    Some <span className="text-white font-semibold"> Disadvantages </span> of this implementation can be:
                </p>
                
                <ul className="list-white-space">
                    <li>
                        <span className="text-white font-semibold"> Latency in Updates </span> (  Since the function executes only once per interval, some intermediate updates may be skipped. )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Complexity in Some Cases </span> ( Implementing throttling correctly can introduce additional logic that might be hard to manage in certain applications. )
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Less Precise Data </span> (  If used in real-time tracking - e.g., precise cursor tracking -, some data points may be lost. )
                    </li>
                </ul>

            </SectionWrapper>

        </div>
        )
}

export default ThrottlingRendering;