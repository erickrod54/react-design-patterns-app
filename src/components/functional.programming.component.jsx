import React from "react";
import { ButtonGeneral, ButtonWrapper, CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import RecursivePattern from "./recursive.pattern.component";
import { usePatternsAppContext } from "../context";
import BashCode from "./bash.higlight.component";
import { GreenButton, RedButton } from "./composition.pattern.component";
import { Secondary, SmallWarning, WarningButton } from "./partial.composition.pattern";
import { Card, CardCompound } from "./index.components";


/**react-design-patterns-app - version 5.06 - FunctionalProgramming
 * - Features: 
 * 
 *     --> Adding 'cardpattern' code for Compound Composition Pattern.
 * 
 * Note: this end component will handle the props destructuring and 
 * rendering
 */

const FunctionalProgramming = () => {

    const { myNestedObject, CodeData } = usePatternsAppContext();

    const recursivecode = CodeData[26].code;

    const myNestedData = CodeData[27].code;
    const cardcomponent = CodeData[29].code;
    const cardpattern = CodeData[28].code;

    return(
        <div>
        <CustomTitleStyle>
            <CustomTitle  title={<p className="functional-programming"><span >Functional Programming </span></p>} />
        </CustomTitleStyle>

        <SectionWrapper>
            <p>
                functional programming has use cases related with the patterns 
                previously, Controlled Components, Functional Components, HOC's,
                Recursive Components, Partial Components, Composition
            </p>

            <p>
                this functional programming paradigm is entirely focused
                React stack and their key points are as follow:      
            </p>

            <CustomTitleStyle>
                    <CustomTitle  title={<p className="functional-programming"><span >Definition of Functional Programming:</span></p>} />
            </CustomTitleStyle>

            <ul>
                <li>
                    <span className="text-white font-semibold"> Emphasizes minimizing mutation and state change.</span>
                    (can be focus in how the pattern reduces large modifications and how mutation by useState hook and state 
                    management libraries help in this goal) 
                </li>
                <li>
                    <span className="text-white font-semibold"> Utilizes pure functions independent of external data. </span>
                    ( pure functions always give the same results make it them a deterministic pattern )
                </li>
                <li>
                    <span className="text-white font-semibold"> Treats functions as first-class citizens. </span>
                    ( this means a function can be asigned as variable, passed as an argument, returned from 
                      other functions, and stored in data structures )
                </li>
                <li>
                    <span className="text-white font-semibold"> Treats functions as first-class citizens. </span>
                    ( this means a function can be asigned as variable, passed as an argument, returned from 
                      other functions, and stored in data structures )
                </li>
            </ul>

            <CustomTitleStyle>
                    <CustomTitle  title={<p className="functional-programming"><span >Encouragement for Research: </span></p>} />
            </CustomTitleStyle>            
            
            <ul>
                <li>
                        <span className="text-white font-semibold"> research about patterns can beneficial for a developer's career and
                        is not limited to React world. </span>
                </li>               
            </ul>            

            <CustomTitleStyle>
                    <CustomTitle  title={<p className="functional-programming"><span >Applications of Functional Programming in React: </span></p>} />
            </CustomTitleStyle> 

            <ul>
                <li>
                    <span className="text-white font-semibold"> Control components</span>
                    (Manage component state by passing necessary props.) 
                </li>
                <li>
                    <span className="text-white font-semibold"> State management function components </span>
                    ( Key application of functional programming. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Higher-order components (HOCs) </span>
                    ( Leverage first-class functions, enabling creation of reusable functions that return other functions. )
                </li>
            </ul>            

            <CustomTitleStyle>
                    <CustomTitle  title={<p className="functional-programming"><span >Design Patterns in React Influenced by Functional Programming: </span></p>} />
            </CustomTitleStyle>                

            <ul>
                <li>
                    <span className="text-white font-semibold"> Recursive components </span>
                    ( Rely on recursion to achieve specific effects. ) 
                </li>
                <li>
                    <span className="text-white font-semibold"> Partially applied components </span>
                    ( Enable creation of more specific versions by passing a subset of props, allowing for code reuse and customization. )
                </li>
                <li>
                    <span className="text-white font-semibold"> Component composition (HOCs) </span>
                    ( Involves combining multiple components into a single component for achieving desired effects. )
                </li>
            </ul>

            <p>
                let's say i have a nested object and i want build a component that render recursively the data: 
            </p> 

            <BashCode code={myNestedData}/>     

            <p>
                a recursive component is a component that calls itselft from inside itself ( kind like recursive functions, but this case applied to react components ) 
                these components are compose of a <span className="text-white font-semibold"> base case </span> a an example of recursive components and a 
                <span className="text-white font-semibold"> recursive case </span>, as the example as folllows:
            </p>

            <BashCode code={recursivecode}/>

            <p>
                rendering as follows: 
            </p>

            <RecursivePattern data={myNestedObject}/>

            <p>
                and when it comes to <span className="text-white font-semibold"> composition pattern </span>, by passing all the props i can 
                create custom versions of a generic component, as follows:
            </p>
            
           <RedButton text='danger custom'/>   

           <p>
               and the green version as follows:         
           </p>          

           <GreenButton text='approve custom'/>

           <p>
                 a variation of <span className="text-white font-semibold"> composition pattern </span> is <span className="text-white font-semibold"> 
                 partially composition pattern </span> this last one use part of the props of the pattern component to build custom versions:         
           </p>
           
           <WarningButton text='Warning Custom'/>

           <p>
               and a custom variation of this warning will be as follows:
           </p>

           <SmallWarning text='small warning custom'/>

           <p>
               and another custom variation can be a secondary button as follows: 
           </p>

           <Secondary text='secondary custom'/>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="functional-programming"><span >Importance of Component Composition: </span></p>} />
            </CustomTitleStyle>         

            <ul>
                <li>
                    <span className="text-white font-semibold"> Component composition enhances modularity by combining simpler components to create more complex ones. </span>
                </li>
            </ul>                  

            <CustomTitleStyle>
                <CustomTitle  title={<p className="functional-programming"><span >Upcoming Exploration: </span></p>} />
            </CustomTitleStyle>            

            <ul>
                <li>
                    <span className="text-white font-semibold"> Mention of diving into three additional design patterns that showcase the influence of functional programming in React </span>
                    ( recursive components, partially applied components, and component composition. )
                </li>
            </ul>    

            <CustomTitleStyle>
                <CustomTitle  title={<p className="functional-programming"><span >Bonus patterns for composition: </span></p>} />
            </CustomTitleStyle>

            <p>
                there two patterns that are really important when it comes to solutions for composition at big scale ( big scale
                composition can become very complex in order to control and maintain component and subcomponents ):        
            </p>

            <ul>
                <li>
                    <span className="text-white font-semibold"> Compound Composition </span>
                    ( especially when dealing with nested props and sub-components. ) 
                </li>
                <li>
                    <span className="text-white font-semibold"> Observer Pattern </span>
                 
                </li>
            </ul>     

            <p>
                <span className="text-white font-semibold"> Compound Composition </span> separate sub components that are of main
                big component. These components are then attached to the instance of the main component, making them accessible outside 
                the main component.    
            </p>  

            <p>
                The key idea is to break down a complex component into smaller sub-components and 
                compose them together to form the complete component.     
            </p>

            <p>
                let's say i have a main component that is going to be a Card Component will be
                as follows:
            </p>

            <BashCode code={cardcomponent}/>
            
            <p>
                and the pattern will be as follows:
            </p>    

            <BashCode code={cardpattern}/>

            <p>
                and this component will render as follows:
            </p>

            <Card
                header={<h1 style={{margin:'0'}}>Header</h1>}
                footer={
                    <ButtonWrapper>
                       <ButtonGeneral>
                            <button>Ok</button>
                       </ButtonGeneral>
                       <ButtonGeneral>
                            <button>cancel</button> 
                       </ButtonGeneral>
                    </ButtonWrapper>
                }
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris 
                pharetra et ultrices. Curabitur vitae nunc sed velit dignissim sodales. Habitant
                morbi tristique senectus et netus. Eget sit amet tellus cras adipiscing enim eu 
                turpis. A lacus vestibulum sed arcu non. Et pharetra pharetra massa massa ultricies 
                mi quis. Dignissim suspendisse in est ante in. Duis tristique sollicitudin nibh 
                sit amet commodo nulla facilisi. Sed sed risus pretium quam vulputate dignissim 
                suspendisse. Turpis nunc eget lorem dolor sed viverra ipsum nunc. 
            </Card>



            <p>
                 This Card , and for this i separate components are created for the header,
                 body, and footer. These components are then attached to the instance of the card 
                 component, making them accessible 
                 outside the card.    
            </p>

            <CardCompound>
                <CardCompound.Header>
                    <h1 style={{margin:'0'}}><span className="text-white font-semibold"> Compound Header </span></h1>
                </CardCompound.Header>
                <CardCompound.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris 
                    pharetra et ultrices. Curabitur vitae nunc sed velit dignissim sodales. Habitant
                    morbi tristique senectus et netus. Eget sit amet tellus cras adipiscing enim eu 
                    turpis. A lacus vestibulum sed arcu non. Et pharetra pharetra massa massa ultricies 
                    mi quis. Dignissim suspendisse in est ante in. Duis tristique sollicitudin nibh 
                    sit amet commodo nulla facilisi. Sed sed risus pretium quam vulputate dignissim 
                    suspendisse. Turpis nunc eget lorem dolor sed viverra ipsum nunc. <span className="text-white font-semibold"> 
                    Compound Body </span>
                </CardCompound.Body>
                <CardCompound.Footer>
                <ButtonWrapper>
                       <ButtonGeneral>
                            <button>Ok</button>
                       </ButtonGeneral>
                       <ButtonGeneral>
                            <button>cancel</button> 
                       </ButtonGeneral>
                       <span className="text-white font-semibold"> Compound Footer </span>
                    </ButtonWrapper>
                </CardCompound.Footer>
            </CardCompound>

            <p>
                By adopting the compound component pattern, developers can achieve a more straightforward 
                and flexible design for their React components. 
            </p>


        </SectionWrapper>
        </div>
    )
}

export default FunctionalProgramming;