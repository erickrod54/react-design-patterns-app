import React from "react";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components.index";
import { BashCode, SplitScreen, SplitScreenVariation } from "./index.components";
import { LeftSideComponent, LeftSideComponentVariation, RightSideComponent, RightSideComponentVariation } from "./prop-sub-components/prop.components.index";
import RegularList from "./regular.list.component";
import AuthorSmallListItems from "./prop-sub-components/autors.small.items.list.component";
import AuthorLargeListItems from "./prop-sub-components/authors.large.items.component";

/**react-design-patterns-app - version 2.15 - LayoutComponentPattern 
 * - Features: 
 * 
 *     --> Implementing 'RegularList' to rehuse it for Large and 
 *          Small List
 * 
 * Note: This is the first topic
 */

const LayoutComponentPattern = () => {

    const { ImagesData, CodeData, authors } = usePatternsAppContext();

    
    console.log({ CodeData })

    const { list } = ImagesData[0]
    
    const layoutexamples = list[0].image;
    const sidebarexample = list[1].image;
    const codelayout = CodeData[0].code;
    const splitscreenvariation = CodeData[1].code;
    const splitscreenvariationcomposition = CodeData[2].code;
    const compositionvariation = CodeData[3].code;

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<span className="layout">layout component pattern</span>} />
            </CustomTitleStyle>
        <SectionWrapper>
            <p>
                layout components focus on organizing other
                components within a web page, some examples
                of layout components can be:
            </p> 
            
            <ul>
                <li>
                    Split Screen
                </li>
                <li>
                    List
                </li>
                <li>
                    Modals
                </li>
            </ul>
            
            <p>
                as can be seen in the following picture:
            </p>

            <img src={layoutexamples} alt="layoutexamples" />

            <p>
                an use case can be when is developed a side navigation
                developers usually tend to include both as the html associated
                styles within component itself as the image that follows:
            </p>

            <img src={sidebarexample} alt="layoutexamples" />

            <p>
                however with layout components adopt different approaches
                by separating the actual layout styles into a dedicated component
                and only insert the specific components like the side navigation
                into the layout component
            </p>

            <p>
                the <span className="text-white font-semibold">main advantage of using layout components </span> 
                is that the individual components, the core content of a web
                page <span className="text-white font-semibold">should be unaware and unconcerned about their 
                precise location within the page structure</span>.  
            </p>

            <CustomTitleStyle>
                <CustomTitle  title={<span className="split-screen">Split Screen</span>} />
            </CustomTitleStyle>

            <p>
                Split Screen is a pattern that makes easy and highly efficient how the screen
                splitting is made
            </p>
            
            <p>
                Example of split screen pattern:
            </p>

            <SplitScreen Left={LeftSideComponent} Right={RightSideComponent} leftWidth={1} rightWidth={3}/>

            <p>
                where the left side has a <span className="text-white font-semibold"> flex value of 1 </span> and the right side has a 
                <span className="text-white font-semibold"> flex value of 3</span> 
            </p>

            <p>
                the result can be achieved by passing the values <span className="text-white font-semibold"> leftWidth </span> and 
                <span className="text-white font-semibold"> rightWidth </span> corresponding with the flex values 
            </p>

            <BashCode code={codelayout} />

            <p>
                also there is another <span className="text-white font-semibold"> alternative </span>, that can result in a 
                <span className="text-white font-semibold"> more reusable way the code </span>, this variation make use 
                of the <span className="text-white font-semibold"> open tag </span> of the component and 
                <span className="text-white font-semibold">add the sub components as children</span>:
            </p>

            <p>
                the <span className="text-white font-semibold"> SplitScreenVariation </span> will use the children
                prop by destructuring the <span className="text-white font-semibold"> children </span> in an array:
            </p>

            <BashCode code={splitscreenvariation} />

            <p>
                and the <span className="text-white font-semibold"> composition of the variation </span> will be as follows:
            </p>

            <BashCode code={splitscreenvariationcomposition} />


            <p>
                reuslting in: 
            </p>

            <SplitScreenVariation leftWidth={1} rightWidth={3}>
                <LeftSideComponent />
                <RightSideComponent/>
            </SplitScreenVariation>
            
            <p>
                even with this variation the <span className="text-white font-semibold"> advantage </span> is how is earned
                 more <span className="text-white font-semibold"> control over the components </span>, lets say i want to 
                 add <span className="text-white font-semibold">custom features </span>, for this particular case let do it 
                 with a title or custom content, with this last variation is way easier to make it, as it follows: 
            </p>

            <BashCode code={compositionvariation} />

            <p>
                resulting in:
            </p>

            <SplitScreenVariation leftWidth={1} rightWidth={3}>
                <LeftSideComponentVariation  title={'the left custom content'}/>
                <RightSideComponentVariation title={'the right custom content'} />
            </SplitScreenVariation>

            <CustomTitleStyle>
                <CustomTitle  title={<span className="list-pattern">List Pattern</span>} />
            </CustomTitleStyle>

            <p>
                the first list will be ( Small list ) :
            </p>
            
            <RegularList items={authors} sourceName={"author"} ItemComponent={AuthorSmallListItems}/>

            <p>
                the second list will be ( Large list ):
            </p>

            <RegularList items={authors} sourceName={"author"} ItemComponent={AuthorLargeListItems}/>
        </SectionWrapper>
        </div>
    )
}

export default LayoutComponentPattern;