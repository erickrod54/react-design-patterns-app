import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";
import {TrackMouse, TrackMouseNotOptimal, } from "./index.components";


/**react-design-patterns-app - version 49.08 - ThrottlingRendering
 * - Features: 
 * 
 *     --> Fxing importd  
 *
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const ThrottlingRendering = () => {

    const { CodeData } = usePatternsAppContext();

    const usemouseposition  = CodeData[213].code;
    const mouseposition  = CodeData[214].code;
    const trackmousenotoptimal  = CodeData[215].code;
    const usetrackmousenotoptimal  = CodeData[216].code;
    
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

                <p>
                    so lets start by building <span className="text-white font-semibold"> useMousePosition </span> hook that will
                    calculate the mouse position:
                </p>

                    <BashCode code={usemouseposition}/>

                   <p>
                        and the <span className="text-white font-semibold"> TrackMouse  </span> that will get thte mouse postition by using 
                        the <span className="text-white font-semibold"> useMousePosition  </span> hook, as follows: 
                   </p>
            
                    <BashCode code={mouseposition}/>


                    <TrackMouse />

                    <p>
                        so at this point the app is performing an <span className="text-white font-semibold"> extensive rendering  </span>  
                        because is <span className="text-white font-semibold"> tracking every position of the mouse  </span> and every 
                        position is a render, but is not than extensive 
                        without <span className="text-white font-semibold"> Throttle Function Execution Logic  </span> 
                        that controls rendering flow, making renders with time intervals and using flags when is necessary, without 
                        these improvements will look as follows:
                    </p>

                    <TrackMouseNotOptimal />

                    <p>
                        which way more <span className="text-white font-semibold"> extensive rendering  </span>, because will be the 
                        base code without <span className="text-white font-semibold"> throttling  </span>, so there's no control 
                        in the render, and depending on the use case can lead render crashes, this <span className="text-white font-semibold"> TrackMouseNotOptimal  </span>   
                        will be as follows:
                    </p>

                    <BashCode code={trackmousenotoptimal}/>

                    <p>
                        and the <span className="text-white font-semibold"> useMousePositionNotThrottling </span> hook without the throttling as 
                        follows:
                    </p>

                    <BashCode code={usetrackmousenotoptimal}/>

            </SectionWrapper>

        </div>
        )
}

export default ThrottlingRendering;