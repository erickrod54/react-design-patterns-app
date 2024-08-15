import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 32.04 - StateManagementPatterns
 * - Features: 
 * 
 *     --> Adding 'StateManagementPatterns' Advantages
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const StateManagementPatterns = () => {

    const { CodeData } = usePatternsAppContext();
    
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

            </SectionWrapper>
        </div>
    )
}

export default StateManagementPatterns;