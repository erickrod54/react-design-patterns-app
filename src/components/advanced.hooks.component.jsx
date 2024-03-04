import React from "react";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import KeysExercise from "./keys.exersice.component";
import BashCode from "./bash.higlight.component";
import { usePatternsAppContext } from "../context";
import WithoutKeysExercise from "./withoutkeys.exersice.component";
import WithtKeysExercise from "./withtkeys.exersice.component";
import AlertMessageWithEventListener from "./alert.message.event.listener.portal.component";
import AlertMessageWithEventCapture from "./alert.message.capture.event.portal.component";
import TopUseLayoutEffect from "./top.use.effect.component";

/**react-design-patterns-app - version 10.13 - AdvancedHooks
 * - Features: 
 * 
 *     --> Adding note 'useLayoutEffect pattern'   
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
 */

const AdvancedHooks = () => {

    
    const { CodeData } = usePatternsAppContext();

    const keyexercisecode = CodeData[72].code;
    const countercode = CodeData[73].code;
    const withoutkeysexercisecode = CodeData[73].code;
    const withkeysexercisecode = CodeData[74].code;
    const alertMessagewitheventListener = CodeData[75].code;
    const alertportaleventListenercode = CodeData[76].code;
    const alertmessagewitheventcapture = CodeData[77].code;
    const alertportalcode = CodeData[78].code;
    const topuselayouteffectcode = CodeData[79].code;
    const tooltipWrappercode = CodeData[80].code;

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="advanced-hooks-patterns"><span > Advanced Hooks </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

                <p>
                    this will be a <span className="text-white font-semibold"> compilation 9 most use advanced hooks patterns </span> 
                    used to solve a variaty of problems:
                </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> keys </span> ( Unique identifiers used by React to efficiently update and manage lists of elements )
                </li>
                <li>
                    <span className="text-white font-semibold"> event listeners </span> ( Functions that listen for specific events - such as clicks or key presses - and execute code in response to those events )
                </li>
                <li>
                    <span className="text-white font-semibold"> useLayoutEffect </span> ( A React hook similar to `useEffect`, but fires synchronously after all DOM mutations. )
                </li>
                <li>
                    <span className="text-white font-semibold"> useId </span> ( Custom React hook used to generate unique IDs for elements, often used in conjunction with accessibility or for DOM manipulation. )
                </li>
                <li>
                    <span className="text-white font-semibold"> useCallback as Refs </span> ( React hook used to memoize callback functions, commonly used with `useRef` to maintain consistent references between renders.)
                </li>
                <li>
                    <span className="text-white font-semibold"> useImperativeHandle </span> ( React hook used to customize the instance value that is exposed when using `ref` with `forwardRef`)
                </li>
                <li>
                    <span className="text-white font-semibold"> useDeferredValue </span> ( React hook that defers the update of a value to avoid blocking the UI, useful for optimizing performance of non-critical updates.)
                </li>
                <li>
                    <span className="text-white font-semibold"> useTransition </span> ( React hook that allows for smooth transitions when adding or removing elements from the DOM, improving user experience)
                </li>
                <li>
                    <span className="text-white font-semibold"> Async React Router </span> ( Feature of React Router that allows for lazy loading and code splitting of route components, enhancing performance by loading components asynchronously. )
                </li>
            </ul>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="advanced-hooks-keys"><span > keys </span></p>} />
            </CustomTitleStyle>

            <p>
                The <span className="text-white font-semibold"> implementation of keys </span> in <span className="text-white font-semibold"> React Components </span> 
                is highly important for the context of <span className="text-white font-semibold"> managing render updating </span> and preventing unexpected 
                behavior when rendering components
            </p>

            <p>
                in React, keys are used to <span className="text-white font-semibold"> uniquely identify components </span>, especially when <span className="text-white font-semibold">
                rendering lists </span> or <span className="text-white font-semibold"> dynamically changing components. </span> They <span className="text-white font-semibold"> 
                allow </span> React to <span className="text-white font-semibold"> efficientlly update and manage the component tree </span> by distinguishing between 
                <span className="text-white font-semibold">  different instances of the same component </span>
            </p>

            <p>
                so i have the an exercise that <span className="text-white font-semibold"> counts items </span> as <span className="text-white font-semibold"> shirts and shoes 
                </span> you can imagine as a shopping cart as follows:
            </p>

            <BashCode code={keyexercisecode}/>

            <p>
                so what happens if i set different parent elements for each span for example a <span className="text-white font-semibold"> {`<div >`} </span> and a 
                <span className="text-white font-semibold"> {`<setion >`} </span> as follows:  
            </p>

            <BashCode code={withoutkeysexercisecode}/>

            <p>
                resulting as follows:
            </p>

            <WithoutKeysExercise />

            <p>
                and this way the <span className="text-white font-semibold"> react tree </span> will <span className="text-white font-semibold"> detect them as 
                different element in the tree </span>, affecting the render of the counter consequentlly, as can be noticed
            </p>

            <p>
                and the <span className="text-white font-semibold"> {`<Counter />`} </span> code as follows:
            </p>

            <BashCode code={countercode}/>

            <p>
                getting stick with <span className="text-white font-semibold"> KeysExercise </span>, it <span className="text-white font-semibold"> preserves the 
                same state </span> for both elements ( the react element does not get updated, unnecessary rendering ), cause they are detected as the same span, 
                resulting in:
            </p>

            <KeysExercise />

            <p>
                and by the resulting code i can notice in the behavior that as i switch between shirts and shoes keeps the
                count is currenly the same for both <span className="text-white font-semibold"> ( should not be as this ),
                </span> because as i can increase the counter for shirts i cannot 
                assume that shoes are the same count, so here comes the question <span className="text-white font-semibold"> "how can i fix the count for each ?" </span>, 
                and the answer is by using <span className="text-white font-semibold"> keys </span> for 
                <span className="text-white font-semibold"> shirts and shoes. </span>
            </p>

            <p>
                so refactoring the code the goal is to <span className="text-white font-semibold"> manage update render of the component </span> will be to get will 
                be as follows:
            </p>

            <BashCode code={withkeysexercisecode}/>


            <p>
                being this way <span className="text-white font-semibold"> most accurate </span> in order to <span className="text-white font-semibold"> detect them as 
                different elements </span> from each other and clearing its state to <span className="text-white font-semibold"> the default </span> as follows:
            </p>

            <WithtKeysExercise />

            <p>
                In summary,<span className="text-white font-semibold"> while the key prop itself doesn't directly affect the state </span> of the Counter component, it 
                <span className="text-white font-semibold"> plays a crucial role in React's rendering </span> and 
                <span className="text-white font-semibold"> reconciliation process </span>, ensuring efficient 
                <span className="text-white font-semibold"> updates and maintaining component stability. </span>
            </p>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="event-listeners-hooks"><span > event listeners </span></p>} />
            </CustomTitleStyle>

            <p>
                it's important to use event listeners in React components to <span className="text-white font-semibold"> handle user interactions 
                </span> and <span className="text-white font-semibold"> respond to events effectively. </span> Event 
                handlers like <span className="text-white font-semibold"> onClick typically follow the bubbling phase, </span> where 
                <span className="text-white font-semibold"> events propagate </span> from the <span className="text-white font-semibold"> target 
                element up through its ancestors. </span> This means <span className="text-white font-semibold"> that event handlers attached to parent </span> 
                elements <span className="text-white font-semibold"> will be triggered after those attached to child elements. </span>
            </p>

            <p>
                so refactoring the alert message portal to use an onclick event listener, resulting as follows:
            </p>

            <BashCode code={alertMessagewitheventListener}/>

            <p>
                and the AlertPortalEventListener code with the inner div will be as follows:
            </p>

            <BashCode code={alertportaleventListenercode}/>

            <p>
                resulting in:
            </p>

            <AlertMessageWithEventListener />

            <br />
            <br />

            <p>
                However, sometimes <span className="text-white font-semibold"> it will be necessary 
                to handle events during the capturing phase </span>, where <span className="text-white font-semibold">
                events propagate from the root element down to the target element.</span> This can be useful 
                <span className="text-white font-semibold"> for scenarios where i need to intercept events before they 
                reach their target, or if i want to ensure that certain event handlers are executed before others </span>
            </p>

            <p>
                in order to reach this goal the event listener instead of <span className="text-white font-semibold"> 
                onClick </span> will be <span className="text-white font-semibold"> onClickCapture </span>
                so by using <span className="text-white font-semibold"> onClickCapture ensures </span> that the event 
                handler <span className="text-white font-semibold"> attached to the outer div is triggered before the one 
                attached to the inner div.</span> This can be important if the order of event handling is significant for your 
                the application logic, an also to <span className="text-white font-semibold"> determine the elements have 
                the right order trigger  ( for logic bugs ). </span>
            </p>

            <p>
                so refactoring to <span className="text-white font-semibold"> capture </span> every phase using 
                <span className="text-white font-semibold"> onClickCapture: </span>
            </p>

            <BashCode code={alertmessagewitheventcapture}/>

            <p>
                and the <span className="text-white font-semibold"> AlertPortalEventCapture </span> as follows:
            </p>

            <BashCode code={alertportalcode}/>

            <p>
                resulting in the <span className="text-white font-semibold"> inner div </span> attached to the 
                <span className="text-white font-semibold"> outer div </span> as follows: <span className="text-white font-semibold"> ( check the java console ) </span>
            </p>


            <AlertMessageWithEventCapture />

            <br />
            <br />

            <CustomTitleStyle>
                <CustomTitle  title={<p className="use-layout-pattern"><span > useLayoutEffect pattern </span></p>} />
            </CustomTitleStyle>

            <p>
                <span className="text-white font-semibold"> useLayoutEffect </span> hook in React  <span className="text-white font-semibold"> 
                address issues </span> related to <span className="text-white font-semibold"> UI rendering and responsiveness. </span> 
                and achieving <span className="text-white font-semibold"> smooth user experience. </span>
            </p>

            <p>
                this pattern is for specefic use cases where i have <span className="text-white font-semibold"> UI components that are not 
                highly complex </span> and are <span className="text-white font-semibold"> synchronous </span>
            </p>

            <p>
                for example here i have an <span className="text-white font-semibold"> UI component  </span> that has an issue related with a 
                <span className="text-white font-semibold"> lag rendering </span> due to a <span className="text-white font-semibold"> 
                calculation  </span> that is required in order to render this component: 
            </p>

            <BashCode code={topuselayouteffectcode}/>

            <p>
                Some <span className="text-white font-semibold"> advantages </span> of this pattern are: 
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Solving Rendering Lag </span> ( addresses rendering delays caused by asynchronous behavior in useEffect )
                </li>
                <li>
                    <span className="text-white font-semibold"> Synchronous Execution </span> ( executes synchronously, allowing for immediate updates to the DOM based on calculations performed within the hook )
                </li>
                <li>
                    <span className="text-white font-semibold"> Improved User Experience </span> ( By synchronizing calculations and rendering, useLayoutEffect enhances the user experience by eliminating UI inconsistencies and delays )
                </li>
                <li>
                    <span className="text-white font-semibold"> Precise UI Updates</span> ( UI updates accurately reflect changes in state or calculations, resulting in a smoother and more responsive interface. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Specific Use Cases </span> ( While useEffect is suitable for most scenarios, useLayoutEffect is particularly useful when precise UI rendering based on calculations is required )
                </li>
                <li>
                    <span className="text-white font-semibold"> Complementary to useEffect </span> ( opting for useLayoutEffect when synchronous rendering is critical and it's not meant to replace useEffect entirely. )
                </li>
            </ul>
            
            <p>
                Some <span className="text-white font-semibold"> disadvantages: </span> of this pattern are: 
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Performance Impact </span> ( Since useLayoutEffect runs synchronously and blocks painting, it can potentially degrade performance, especially if used excessively or unnecessarily.  )
                </li>
                <li>
                    <span className="text-white font-semibold"> Potential for Blocking User Interaction </span> (  Due to its synchronous nature, useLayoutEffect might delay user interactions or animations, causing a perceived slowdown in the application's responsiveness. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Potential for Flickering or Jank </span> ( n some cases, using useLayoutEffect to make synchronous updates to the DOM can introduce flickering or jank, especially if the updates result in significant layout changes or reflows. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Limited Browser Compatibility </span> (  useLayoutEffect is closely tied to the browser's layout and painting phases, which may not be fully supported or consistent across all browsers. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Increased Complexity </span> (  Introducing useLayoutEffect into a codebase adds complexity. This can lead to code that is harder to maintain and debug. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Potential for Overuse </span> ( Developers may be tempted to use useLayoutEffect more frequently than necessary, assuming that synchronous updates are always preferable. )
                </li>
            </ul>

            <h4>Note: trade-offs between synchronous updates and performance implications to ensure a balanced and optimized user experience.</h4>

            </SectionWrapper>
        </div>)

}

export default AdvancedHooks;