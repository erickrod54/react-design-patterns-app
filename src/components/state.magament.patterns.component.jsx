import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import PersonState from "./state.magament.patterns.use.case.person";
import BashCode from "./bash.higlight.component";
import TasksBoard from "./state.magament.patterns.use.case.task.board";
import TasksBoardImmer from "./state.magament.patterns.use.case.task.board.useimmer";

/**react-design-patterns-app - version 36.06 - StateManagementPatterns
 * - Features: 
 * 
 *     --> Starting 'ShoppingListRowBefore'    
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const StateManagementPatterns = () => {

    const { CodeData } = usePatternsAppContext();

    const personstatewrongcode = CodeData[170].code;
    const personstaterightcode = CodeData[171].code;
    const boarddata = CodeData[172].code;
    const taskboardcode = CodeData[173].code;
    const taskboardimmercode1 = CodeData[174].code;
    const taskboardimmercode2 = CodeData[175].code;
    const taskboardimmercode3 = CodeData[176].code;
    const taskboardimmercode = CodeData[177].code;
    const shoppinglistheader = CodeData[178].code;
    
    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="state-management-patterns"><span > State Management Patterns </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>

            <p>
                Before approaching the <span className="text-white font-semibold"> State management Patterns </span>, lets dive in a 
                important Concept in React that its <span className="text-white font-semibold"> Immutability Paradigm </span> where 
                data structures are <span className="text-white font-semibold"> not directly modified </span>, instead of 
                altering the original object a new object is created with the desired changes.
            </p>

            <p>
                state management in React can be simplified and improved by using the <span className="text-white font-semibold"> useImmer hook </span> from the 
                <span className="text-white font-semibold"> immer library </span>. the <span className="text-white font-semibold"> main goals </span> 
                of this implementation as follows:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Highlight React's state management challenges </span> ( directly mutating state in React is not allowed and how adhering to immutability can lead to verbose code )
                </li>
                <li>
                    <span className="text-white font-semibold"> Introduce the useImmer hook </span> ( simplifies state updates by allowing mutations while preserving immutability under the hood )
                </li>
                <li>
                    <span className="text-white font-semibold"> Provide practical examples </span> ( Show the difference between traditional state management in React and the use of useImmer through a Trello/Jira-like task management app )
                </li>
                <li>
                    <span className="text-white font-semibold"> Promote cleaner code </span> ( Advocate for better code readability and maintainability using useImmer )
                </li>
            </ul>

            <p>
                some <span className="text-white font-semibold"> Advantages </span> of this implementation are:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Simplified Code </span> ( Eliminates the need for spread operators and deeply nested updates, resulting in concise and readable state updates )
                </li>
                <li>
                    <span className="text-white font-semibold"> Improved Developer Experience </span> ( Reduces cognitive load by allowing developers to write straightforward mutations instead of immutability boilerplate. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Preserves React Paradigms </span> ( Adheres to React's functional paradigms by ensuring immutability in the background )
                </li>
                <li>
                    <span className="text-white font-semibold"> Powerful Hooks Integration </span> ( Provides both useImmer and useImmerReducer, making it versatile for various use cases. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Increased Maintainability </span> ( Cleaner and simpler codebases are easier to debug and extend )
                </li>
            </ul>

            <p>
                some <span className="text-white font-semibold"> Disadvantages </span> of this implementation are:
            </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Additional Dependency </span> ( Requires installing and maintaining the immer library, adding external reliance )
                </li>
                <li>
                    <span className="text-white font-semibold"> Learning Curve </span> ( Developers need to familiarize themselves with the immer library and its behavior )
                </li>
                <li>
                    <span className="text-white font-semibold"> Performance Considerations </span> ( In certain edge cases, the abstraction layer may introduce slight overhead compared to manual immutability handling. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Not a React Native Solution </span> ( While helpful, it doesn't replace all React state management solutions like context or state management libraries. )
                </li>
            </ul>

            <p>
                so React state management because of <span className="text-white font-semibold"> Immutability Paradigm </span>, 
                if i want to modified data directly as follows won't work:
            </p>

            <BashCode code={personstatewrongcode}/>

            <p>
                so React state management by <span className="text-white font-semibold"> Immutability Paradigm </span>, 
                will work as follows:
            </p>    

            <BashCode code={personstaterightcode}/>

            <p>
                resulting <span className="text-white font-semibold"> PersonState </span> as follows:
            </p>

            <PersonState />

            <p>
                so let's work in the  <span className="text-white font-semibold"> TasksBoard </span>, so have the following 
                data set <span className="text-white font-semibold"> boardData </span> as follows: 
            </p>

            <BashCode code={boarddata}/>

            <p>
                and the <span className="text-white font-semibold"> TasksBoard </span> code will be as follows notice 
                that in order to mutate the state the <span className="text-white font-semibold"> onTaskNameChange  handler </span> has 
                a considerable complexity 
            </p>

            <BashCode code={taskboardcode}/>

            <p>
                resulting <span className="text-white font-semibold"> TasksBoard </span> in:
            </p>

            <TasksBoard />

            <p>
                the complexity of the <span className="text-white font-semibold"> state management </span> ( it can be seen that 
                the maping and returning multiple times makes very complex and dificult to maintain ) above can solve by 
                implementing <span className="text-white font-semibold"> useImmer </span> library, first i start by:
            </p>


            <BashCode code={taskboardimmercode1}/>

            <p>
                the <span className="text-white font-semibold"> useImmer </span> library has to be installed previuosly,
                now the <span className="text-white font-semibold"> onSelectTask </span> handler stays the same:
            </p>

            <BashCode code={taskboardimmercode2}/>

            <p>
                the <span className="text-white font-semibold"> onTaskNameChange  </span> in this case will 
                have high modifications due to a <span className="text-white font-semibold"> useImmer </span>
                state management, as follows:
            </p>
            
            <BashCode code={taskboardimmercode3}/>
            
            <p>
                so the complete component will have <span className="text-white font-semibold"> exactly the same behavior </span> with 
                better <span className="text-white font-semibold"> performance and better readbility </span> as follows:
            </p>

            <BashCode code={taskboardimmercode}/>

            <p>
                resulting in: 
            </p>

            <TasksBoardImmer />

            <p>
                then <span className="text-white font-semibold"> useImmer </span> allows to safely modify
                objects directly, the advantages of improved readability, reduced verbosity, and adherence to 
                functional paradigms 
            </p>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="use-reducer-hook-patterns"><span > useReducer and useImmerReducer hook </span></p>} />
            </CustomTitleStyle>

            <p>
                This implementation aims to demonstrate how <span className="text-white font-semibold"> useReducer </span> 
                is used for <span className="text-white font-semibold"> managing complex state transitions </span> 
                in a more <span className="text-white font-semibold"> organized and maintainable way. </span> The 
                lesson transitions to introducing the useImmerReducer hook, which simplifies state management by handling 
                <span className="text-white font-semibold"> immutability internally, </span> leading to cleaner and more concise 
                reducer logic.
            </p>

            <p>
                the use case for the implementation will be a shopping list cart, let's look first 
                the <span className="text-white font-semibold"> useReducer </span> approach, for this 
                let's start step by step building the cart shop list <span className="text-white font-semibold"> 
                ShoppingListRowBefore </span> that will be compose by a 
                header <span className="text-white font-semibold"> ShoppingListHeaderBefore </span> 
                and a row list that will contain every item <span className="text-white font-semibold"> ShoppingListRowBefore </span>
            </p>

            <p>
                let's build <span className="text-white font-semibold"> ShoppingListHeaderBefore </span> step by step:
            </p>

            <BashCode code={shoppinglistheader}/>

            <p>
                now let's build <span className="text-white font-semibold"> ShoppingListRowBefore </span>, this component 
                will display the data related to items on the list:
            </p>

            </SectionWrapper>
        </div>
    )
}

export default StateManagementPatterns;