import React, { useState } from "react";
import { ButtonGeneral, CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import KeysExercise from "./keys.exersice.component";
import BashCode from "./bash.higlight.component";
import { usePatternsAppContext } from "../context";
import WithoutKeysExercise from "./withoutkeys.exersice.component";
import WithtKeysExercise from "./withtkeys.exersice.component";
import AlertMessageWithEventListener from "./alert.message.event.listener.portal.component";
import AlertMessageWithEventCapture from "./alert.message.capture.event.portal.component";
import TopUseEffect from "./top.use.effect.component";
import TopUseLayoutEffect from "./top.uselayouteffect.component";
import UseIdMultipleFormBefore from "./useid.multiple.forms.component";
import UseIdMultipleFormAfterMath from "./useid.multiple.formsaftermath.component";
import UseIdMultipleFormAfter from "./useid.multiple.forms.after.component";
import UseIdAfterMultipleInputs from "./useid.multiple.inputs.after.component";
import UseIdAfterCleanMultipleInputs from "./useid.multiple.inputs.after.clean.component";
import CallbackAsRefBefore from "./usecallback.as.a.ref.before.component";
import CallbackAsRefCommentedBefore from "./usecallback.as.a.ref.commented.before.component";
import CallbackAsRefAfter from "./usecallback.as.a.ref.after.component";
import UseImperativeHookPattern from "./use.imperative.hook.before.component";
import UseImperativeFocusHookPattern from "./use.imperative.hook.focus.before.component";
import UseWithImperativeFocusHookPattern from "./use.imperative.hook.focus.after.component";
import UseImperativeMultipleFocus from "./use.imperative.hook.focus.multiple.component";
import UseDeferredBeforeValueHookPattern from "./use.deferred.value.hook.before.component";
import UseDeferredAfterMemo from "./use.deferred.value.hook.after.memo.component";
import UseDeferredAfterHook from "./use.deferred.value.hook.after.component";
import BooksUseTransitionBefore from "./book.use.transition.component";
import BooksUseTransitionAfter from "./book.use.transition.after.component";

/**react-design-patterns-app - version 16.14 - AdvancedHooks
 * - Features: 
 * 
 *     --> Rendering 'BooksUseTransitionAfter' component
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
 */

const AdvancedHooks = () => {

    
    const { CodeData, showCallback, CallbackHandler } = usePatternsAppContext();

    const useforwardrefs = CodeData[65].code;
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
    const topuselayoutEffectcode = CodeData[81].code;
    const uselayouteffectcode = CodeData[82].code;
    const useIdbeforeformcode = CodeData[83].code;
    const useIdmultipleformBeforecode = CodeData[84].code;
    const useidAftermathform = CodeData[85].code;
    const useidMultipleFormaaftermathcode = CodeData[86].code;
    const useidafterform = CodeData[87].code;
    const useidmultipleFormafter = CodeData[88].code;
    const useidAftertwoorMoreinputs = CodeData[89].code;
    const useidaftermultipleinputs = CodeData[90].code;
    const useidcleanaftertwoorMoreinputs = CodeData[91].code;
    const useidaftercleanmultipleinputs = CodeData[92].code;
    const callbackasrefbefore = CodeData[93].code;
    const callbackasrefcommentedbefore = CodeData[94].code;
    const callbackasrefaftercode = CodeData[95].code;
    const useimperativehookpattern = CodeData[96].code;
    const useimperativefocusHookpatterncode = CodeData[97].code;
    const forwardingImperativerefinputcode = CodeData[98].code;
    const usewithimperativeFocusmethodhookcode = CodeData[99].code;
    const forwardingimperativefocusrefinputcode = CodeData[100].code;
    const useimperativemultiplefocus = CodeData[101].code;
    const forwardingimperativerefstate = CodeData[102].code;
    const useimperativefocusstatepattern = CodeData[103].code;
    const usedeferredbeforevalueHookpatterncode = CodeData[104].code;
    const heavycomponentbeforecode = CodeData[105].code;
    const heavycomponentafterfirst = CodeData[106].code;
    const usedeferredaftermemocode = CodeData[107].code;
    const usedeferredafterhookcode = CodeData[108].code;
    const booksusetransitionbeforecode = CodeData[109].code;
    const covercode = CodeData[110].code;
    const reviewscode = CodeData[111].code;
    const writercode = CodeData[112].code;
    const booksusetransitionaftercode = CodeData[113].code;

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
                and the way the top prop is being modifyied in the style component is as follows:
            </p>

            <BashCode code={tooltipWrappercode}/>

            <p>
                resulting in the following component:
            </p>

            <TopUseEffect />

            
            <br />
            <br />
            <br />
            <br />

            <p>
                by refactoring the code with to use the <span className="text-white font-semibold"> useLayoutEffect </span> hook will be as follows:
            </p>

            <BashCode code={topuselayoutEffectcode}/>

            <p>
                so what essentially <span className="text-white font-semibold"> useLayoutEffect </span> does it is to <span className="text-white font-semibold"> 
                prevent </span> the component from mounting and render in order to give priority to the block of code inside of 
                the <span className="text-white font-semibold"> useLayoutEffect </span>, that is in this case the calculation as follows:
            </p>

            <BashCode code={uselayouteffectcode}/>

            <p>
                ressulting in a component wihtout the <span className="text-white font-semibold"> lag render issue </span> as follows:
            </p>

            <TopUseLayoutEffect />

            <br />
            <br />
            <br />
            <br />
            
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

            <CustomTitleStyle>
                <CustomTitle  title={<p className="useId-hook-pattern"><span > useId hook pattern </span></p>} />
            </CustomTitleStyle>

            <p>
                the <span className="text-white font-semibold"> userId hook pattern </span> presents a simple way to 
                generate <span className="text-white font-semibold"> unique identifiers for HTML elements </span> and 
                it is a <span className="text-white font-semibold"> solution to  address issues with duplicated 
                IDs in components </span>( the unique id / ids are generated  at the <span className="text-white font-semibold"> 
                component scope </span> )
            </p>

            <p>
                this hook pattern can be use in a wide diverse use cases, one of the most common is on forms in order to 
                handle unique id's for inputs, let's say i have a form as follows:
            </p>

            <BashCode code={useIdbeforeformcode}/>

            <p>
                and let's say <span className="text-white font-semibold"> i have an app </span> where this form is 
                <span className="text-white font-semibold"> rendering multiple times </span>, as follows:
            </p>
            
            <BashCode code={useIdmultipleformBeforecode}/>

            <p>
                resulting in:
            </p>

            <UseIdMultipleFormBefore />
            
            <p>
                as can be seen the <span className="text-white font-semibold"> expected behavior is that 
                when the label of each input is being clicked should get the user to input </span>, but it 
                does not happen, because by the code as it is they <span className="text-white font-semibold"> 
                both inputs are the same </span> so no matter where is being clicked <span className="text-white font-semibold"> 
                it will always take to the first because the app they are the same input </span> 
            </p>

            <p>
                so the question is <span className="text-white font-semibold"> how do i solve this ? </span>, the answer
                is by making every input unique in render time, before <span className="text-white font-semibold"> userId 
                hook exists </span> the solution was as follows: 
            </p>

            <BashCode code={useidAftermathform}/>

            <p>
                and it will be rendered multiple times in an app, as follows:
            </p>

            <BashCode code={useidMultipleFormaaftermathcode}/>

            <p>
                so the 'id' for both label an input, and this will create an unique id every time the component get mount,
                and it will work as follows:
            </p>

            <UseIdMultipleFormAfterMath />

            <p>
                In <span className="text-white font-semibold"> SSR </span>, the initial rendering of the 
                <span className="text-white font-semibold"> webpage occurs on the server </span> before 
                <span className="text-white font-semibold"> being sent to the client's browser. </span> 
                This means <span className="text-white font-semibold"> that any dynamically generated content,
                 including IDs,</span> is created during the server-side rendering 
                process.
            </p>

            <p>
                The problem arises when the <span className="text-white font-semibold"> server generates IDs, but these IDs are not 
                retained or matched on the client side </span> when the page is hydrated (i.e., when the client-side JavaScript takes over). 
                Since the client and server generate IDs independently, they <span className="text-white font-semibold"> may end up using 
                different ID values for the same elements. </span>
            </p>

            <p>
                This inconsistency in ID values between server and client renders can lead to various issues:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Breakage of Application Logic </span> ( The application logic might depend on specific IDs to target and manipulate elements. When IDs differ between server and client, the logic based on those IDs may fail, leading to unexpected behavior or errors. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Maintenance Complexity </span> (  Having different IDs on the server and client adds complexity to maintenance tasks. Developers must ensure that the logic and functionality reliant on these IDs are consistent across server and client environments. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Debugging Challenges </span> ( When issues arise due to mismatched IDs, debugging becomes more difficult. Developers must trace the flow of data and understand when and where the ID values diverge between server and client renders. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Potential for Errors </span> ( Inconsistencies in IDs can lead to errors in functionality, user experience, or even security vulnerabilities if certain actions are inadvertently performed on the wrong elements. )
                </li>
            </ul>

            <p>
                so in order to solve these issues and <span className="text-white font-semibold"> generate a different id </span>  for each 
                <span className="text-white font-semibold"> component render and an id that effectivelly preserves constant </span>
                ( and will generate an alphanumeric id - difference with Math that is a float number ) after re render the app i will implement 
                userId as follows:
            </p>

            <BashCode code={useidafterform}/>

            <p>
                And it will be rendered multiple times in an app, as follows:
            </p>

            <BashCode code={useidmultipleFormafter}/>

            <p>
                this will be a much <span className="text-white font-semibold"> better solution </span> and well 
                <span className="text-white font-semibold"> adaptable with SSR </span> due to how is generated the 
                id's resulting in:
            </p>
            
            <UseIdMultipleFormAfter />

            <p>
                so what if i have multiple, let's say i have <span className="text-white font-semibold"> email </span> 
                and <span className="text-white font-semibold"> name </span>, how do i make 
                <span className="text-white font-semibold"> them unique ? </span>, a first 
                and <span className="text-white font-semibold"> not than cleaner version </span> will be as 
                follows:
            </p>

            <BashCode code={useidAftertwoorMoreinputs}/>

            <p>
                and the wrap for the multiple entries will be as follows: 
            </p>

            <BashCode code={useidaftermultipleinputs}/>

            <p>
                resulting in:
            </p>

            <UseIdAfterMultipleInputs />

            <p>
                and essentially it works, but it is <span className="text-white font-semibold"> not a 
                clean solution </span> for the following reasons: 
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Variable Naming </span> ( The variable names id and id2 are not very descriptive - naming by context will best practice -. Choosing more meaningful names lead to code maintainability )
                </li>
                <li>
                    <span className="text-white font-semibold"> Component Structure </span> (  The component could be organized more clearly. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Consistency </span> ( Ensuring consistency in coding style, formatting, and commenting throughout the codebase contributes to maintainability and readability. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Accessibility Considerations </span> ( While the code assigns unique IDs to elements, it's essential to ensure that these IDs are meaningful and contribute to the accessibility of the application. )
                </li>
            </ul>

            <p>
                a clean solution, the unique id is an <span className="text-white font-semibold"> alphanumeric combination with template literals, </span>  
                as follows:
            </p>

            <BashCode code={useidcleanaftertwoorMoreinputs}/>

            <p>
                and will be <span className="text-white font-semibold"> render multiple times </span> as follows, giving an 
                <span className="text-white font-semibold"> unique id </span> for each input:
            </p>

            <BashCode code={useidaftercleanmultipleinputs}/>

            <p>
                resulting in:
            </p>

            <UseIdAfterCleanMultipleInputs />

            <p>
                so the <span className="text-white font-semibold"> template literals </span> give a context that 
                <span className="text-white font-semibold"> makes these id's unique. </span>
            </p>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="use-callback-hook-as-refs"><span > useCallback as Refs </span></p>} />
            </CustomTitleStyle>

            <p>
                <span className="text-white font-semibold"> useCallback hook </span> is used to memoize callback functions, 
                and also is use with <span className="text-white font-semibold"> `useRef` </span> to maintain 
                <span className="text-white font-semibold"> consistent references between renders </span>, this 
                consistency in the references is very important to solve use cases where is needed to maintain 
                a component behavior
            </p>

            <p>
                let's say i have a <span className="text-white font-semibold"> focus </span> behavior on an 
                <span className="text-white font-semibold"> input </span>, and this is conditionally render 
                but has a <span className="text-white font-semibold"> no consistent focus </span> as follows:
            </p>

            <BashCode code={callbackasrefbefore}/>

            <p>
                the issue as can be seen with <span className="text-white font-semibold"> CallbackAsRefBefore </span>
                before the <span className="text-white font-semibold"> foucus </span> applied on the 
                <span className="text-white font-semibold"> inputRef </span> is defined ( having an undefined value )
                due to the useEffect natural behavior, and makes the component crash
            </p>

            <ButtonGeneral>
                <button onClick={CallbackHandler}>Render Callback Component ( Before using refs - refresh page )</button>
            </ButtonGeneral>
            
            {showCallback ? 
            
            <CallbackAsRefBefore />
            
            :
            
            null
            }

            <p>
                then by comment the <span className="text-white font-semibold"> inputRef </span> that is been made at the 
                <span className="text-white font-semibold"> useEffect </span>, i can see how the value is not longer 
                <span className="text-white font-semibold"> undefined </span>, as follows:
            </p>

            <BashCode code={callbackasrefcommentedbefore}/>
            
            <p>
                and then rendering the component as follows:
            </p>

            <CallbackAsRefCommentedBefore />

            <p>
                but essentially this does solve the error of the <span className="text-white font-semibold"> undefined ref </span>, but still 
                <span className="text-white font-semibold"> not getting focus on the input </span> that is the primary goal
            </p>

            <p>
                so in order to solve this we have to apply a callback by the <span className="text-white font-semibold"> useCallback react hook </span>
                refactoring the code as follows:
            </p>
            
            <BashCode code={callbackasrefaftercode}/>

            <p>
                and rendering the component will have the <span className="text-white font-semibold"> focus behavior as expected </span>:
            </p>

            <CallbackAsRefAfter />

            <CustomTitleStyle>
                <CustomTitle  title={<p className="use-imperative-handle-hook"><span > useImperativeHandle hook pattern </span></p>} />
            </CustomTitleStyle>

            <p>
                this pattern is really important for <span className="text-white font-semibold"> use cases </span> when refs are implemented but 
                it is necessary to <span className="text-white font-semibold"> limit access to certain features of the component </span>
            </p>

            <p>
                so expading more the concept of <span className="text-white font-semibold"> limiting the access </span> of a 
                <span className="text-white font-semibold"> ref </span> to specific <span className="text-white font-semibold"> 
                properties or functions </span> of a component in React. This is made by using the <span className="text-white font-semibold"> 
                imperative nature of certain actions, </span> such as <span className="text-white font-semibold"> focusing on an input element,
                </span>  and how they sometimes require using refs. In React limiting the access of a ref is made by using the 
                <span className="text-white font-semibold"> useImperativeHandle hook. </span>
            </p>

            <p>
                so let's say i have a component where i got multiple refs, and at the scope of the component and another one at the scope of
                a subcomponent, as follows:
            </p>

            <BashCode code={useimperativehookpattern}/>

            <p>
                and the <span className="text-white font-semibold"> ForwardingRefInput </span> code as follows: 
            </p>

            <BashCode code={useforwardrefs}/>

            <p>
                resulting in: ( captures the user entry in the Chrome Java console )
            </p>

            <UseImperativeHookPattern />


            <p>
                or refactoring in order to get the reference but this time in order to apply to the user entry the 
                <span className="text-white font-semibold"> focus </span> method:
            </p>

            <BashCode code={useimperativefocusHookpatterncode}/>

            <p>
                resulting in:
            </p>

            <UseImperativeFocusHookPattern />

            <p>
                so i will refactor the reference scope using <span className="text-white font-semibold"> useImperativeHandle hook </span> 
                in order to give access to <span className="text-white font-semibold"> two objects, </span> first 
                the <span className="text-white font-semibold"> ref, </span> and second will be a made up method for pop an alert 
                <span className="text-white font-semibold"> sayType </span> and this will be by the 
                <span className="text-white font-semibold"> ForwardingImperativeRefInput </span> sub component 
            </p>

            <BashCode code={forwardingImperativerefinputcode}/>

            <p>
                resulting in:
            </p>

            <UseWithImperativeFocusHookPattern />

            <p>
                and refactoring the code in order to implement the <span className="text-white font-semibold"> 
                 focus method </span> combined with the imperative hook in order to make it 
                 <span className="text-white font-semibold"> accesible </span> as a 
                <span className="text-white font-semibold"> reference </span> will be as follows for the main component:
            </p>

            <BashCode code={usewithimperativeFocusmethodhookcode}/>    

            <p>
                and the <span className="text-white font-semibold"> sub component </span> will be as follows:
            </p>
            
            <BashCode code={forwardingimperativefocusrefinputcode}/>    

            <p>
                and refactoring for multiple entries will be as follows:
            </p>

            <BashCode code={useimperativemultiplefocus}/>

            <p>
                resulting in the following:
            </p>

            <UseImperativeMultipleFocus />

            <p>
                so another approach using <span className="text-white font-semibold"> useImperativeHandle hook </span> implementing 
                <span className="text-white font-semibold"> states </span> and a dependency array ( as it is use on useEffect to 
                avoid the side effect to be return it every time ) 
            </p>

            <p>
                refactoring the custom sub component as <span className="text-white font-semibold"> ForwardingImperativeRefState </span> 
                in order to use a dependency array and capture the user entry can come in some advantages and some disadvantages as follows:
            </p>

            <BashCode code={forwardingimperativerefstate}/>

             <p>
                Some <span className="text-white font-semibold"> advantages </span> of this pattern are: 
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Controlled Access </span> ( control what functionalities or properties of a component are exposed externally through the ref. By limiting access to only the value )
                </li>
                <li>
                    <span className="text-white font-semibold"> Encapsulation </span> ( Limiting access to the value through the ref promotes encapsulation by hiding internal implementation details of the component. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Improved Security </span> ( Limiting access to sensitive information or critical functionalities reduces the potential attack surface and mitigates security risks. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Enhanced Performance </span> ( Dependency array [value] to the useImperativeHandle hook,  is only re-executed when the value prop changes. )
                </li>
            </ul>

            <p>
                Some <span className="text-white font-semibold"> disadvantages </span> of this pattern are: 
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Complexity </span> ( understanding how the hook works and ensure proper dependency management to avoid unexpected behavior or bugs. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Potential Overhead </span> ( because need to carefully consider the dependencies passed to useImperativeHandle to avoid performance bottlenecks. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Limited Flexibility </span> ( Limiting access to only the value property may restrict the flexibility of the component's API. If external components require access to additional properties or functionalities, they may need to be exposed through alternative means, potentially complicating the component's design. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Learning Curve </span>  ( useImperativeHandle or similar hooks may face a learning curve when implementing or maintaining components that utilize this feature. )
                </li>
            </ul>

            <p>
                and implementing in the main component  <span className="text-white font-semibold"> UseWithImperativeFocusStatePattern </span>  will have  a small refactor 
                in the handler in order to get the user entry, as follows:
            </p>

            <BashCode code={useimperativefocusstatepattern}/>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="use-deferred-value-hook-pattern"><span > UseDeferredValue Hook Pattern </span></p>} />
            </CustomTitleStyle>

            <p>
                this is a very handy hook in order to <span className="text-white font-semibold"> defers the update of a value </span>  to 
                <span className="text-white font-semibold"> avoid blocking the UI, </span> useful for optimizing performance of non-critical 
                updates and enhance <span className="text-white font-semibold"> user experience </span>   
            </p>

            <p>
                let's say i have a component <span className="text-white font-semibold"> UseDeferredBeforeValueHookPattern </span>  that is 
                rendering an user entry by using a sub component <span className="text-white font-semibold"> HeavyComponentBefore </span>, 
                as follows:
            </p>

            <BashCode code={usedeferredbeforevalueHookpatterncode}/>

            <p>
                and the sub component <span className="text-white font-semibold"> HeavyComponentBefore </span>  that renders the user 
                entry code will be as follows:
            </p>

            <BashCode code={heavycomponentbeforecode}/>

            <p>
                resulting in:
            </p>

            <UseDeferredBeforeValueHookPattern />

            <p>
                something that can be think as an inmmediate solution is applying <span className="text-white font-semibold"> memo </span> hook in order 
                to solve this issue ( that useMemo <span className="text-white font-semibold"> does not solve it by itself </span>), anyways will be 
                applied in the sub component as follows:
            </p>

            <BashCode code={heavycomponentafterfirst}/>

            <p>
                so the refactor is made on <span className="text-white font-semibold"> HeavyComponentAfterMemo </span> and just pass this 
                component througth  <span className="text-white font-semibold"> memo </span> as
                <span className="text-white font-semibold"> HeavyComponentAfterFirst </span>. The component placed in the main component
                will be as follows:
            </p>

            <BashCode code={usedeferredaftermemocode}/>

            <p>
                resulting in:
            </p>

            <UseDeferredAfterMemo />

            <p>
                so <span className="text-white font-semibold"> memo does not solve it by itself </span>, here is when
                it comes <span className="text-white font-semibold"> useDeferredValue </span> hook at scene 
                (<span className="text-white font-semibold"> the refactor will made in the main component </span>):
            </p>

            <BashCode code={usedeferredafterhookcode}/>

            <p>
                resulting in:
            </p>

            <UseDeferredAfterHook />

            <p>
                so what <span className="text-white font-semibold"> useDeferredValue </span> will do is to wait
                until the user entry (<span className="text-white font-semibold"> keyword </span> ) is fully
                typed in order to pass it to <span className="text-white font-semibold"> HeavyComponentAfterHook </span>
                so the delay is not noticed <span className="text-white font-semibold"> 
                ( because the main component is not re rendered ) </span>
            </p>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="use-transition-hook-pattern"><span > useTransition Hook Pattern </span></p>} />
            </CustomTitleStyle>

            <p>
                the <span className="text-white font-semibold"> useTransition Hook </span> solve specific use cases 
                where the application is <span className="text-white font-semibold"> multi rendering </span> causing 
                a delay or freeze overall the application, and the use of this pattern allows to  
                <span className="text-white font-semibold"> delays updating the state itself </span> ( so in some 
                way can be considered a different form os state - as a different useState behavior )
            </p>

            <p>
                the <span className="text-white font-semibold"> BooksUseTransitionBefore  </span> component 
                in order to get book reviews, and will be as follows:
            </p>

            <BashCode code={booksusetransitionbeforecode}/>
            
            <p>
                and the <span className="text-white font-semibold"> Cover </span> code sub component as follows: 
            </p>

            <BashCode code={covercode}/>

            <p>
                and the <span className="text-white font-semibold"> Reviews </span> code sub component as follows: 
            </p>            

            <BashCode code={reviewscode}/>

            <p>
                and the <span className="text-white font-semibold"> Writer </span> code sub component as follows: 
            </p>            

            <BashCode code={writercode}/>

            <p>
                the <span className="text-white font-semibold"> BooksUseTransitionBefore </span> 
                main component will result as follows: 
            </p>

           <BooksUseTransitionBefore />

           <p>
                so in the transtion between each <span className="text-white font-semibold"> sub component </span> 
                can be notice a freeze or delay ( the sub component that is dalying its render also interrup for 
                a period of time other sub components renders),  in this cas is the <span className="text-white font-semibold">
                Reviews </span> component and this makes freeze the rest of the buttons
            </p>

            <p>
                in order to solve this issue the <span className="text-white font-semibold"> useTransition </span> is implemented 
                as follows:
            </p>

            <BashCode code={booksusetransitionaftercode}/>

            <p>
                resulting in:
            </p>

            <BooksUseTransitionAfter />

            </SectionWrapper>
        </div>
        )
        
    }
    
    export default AdvancedHooks;