import React from "react";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components.index";
import { BashCode, SplitScreen, SplitScreenVariation } from "./index.components";
import { BookLargeListItems, BooksSmallListItems, LeftSideComponent, LeftSideComponentVariation, RightSideComponent, RightSideComponentVariation } from "./prop-sub-components/prop.components.index";
import RegularList from "./regular.list.component";
import AuthorSmallListItems from "./prop-sub-components/autors.small.items.list.component";
import AuthorLargeListItems from "./prop-sub-components/authors.large.items.component";
import Modal from "./modal.component";

/**react-design-patterns-app - version 3.03 - LayoutComponentPattern 
 * - Features: 
 * 
 *     --> Developing 'Modal' concept
 * 
 * Note: This is the first topic
 */

const LayoutComponentPattern = () => {

    const { ImagesData, CodeData, authors, books } = usePatternsAppContext();

    
    console.log({ CodeData })

    const { list } = ImagesData[0]
    
    const layoutexamples = list[0].image;
    const sidebarexample = list[1].image;
    const codelayout = CodeData[0].code;
    const splitscreenvariation = CodeData[1].code;
    const splitscreenvariationcomposition = CodeData[2].code;
    const compositionvariation = CodeData[3].code;
    const sourcesmalllist = CodeData[4].code;
    const sourcelargelist = CodeData[5].code;
    const sourcecomponent = CodeData[6].code;
    const modalcode = CodeData[7].code;

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
                <CustomTitle title={<p className="list-pattern"><span>List Pattern</span></p>} />
            </CustomTitleStyle>

            <p>
                The list pattern relies on a <span className="text-white font-semibold">composition technique</span> comprising a <span className="text-white font-semibold">main list component, which serves as the layout with the applied pattern</span>. Additionally, there's a <span className="text-white font-semibold">source component</span> containing <span className="text-white font-semibold">source props</span> that will be passed to the <span className="text-white font-semibold">main list component or list layout</span>.
            </p>

            <p>
                The <span className="text-white font-semibold">main list component</span> (that will be the <span className="text-white font-semibold">list layout with the pattern applied</span>) is as follows:
            </p>

            <BashCode code={sourcecomponent} />

            <p>
                The <span className="text-white font-semibold">source component with the small list</span> of data and the code is as follows:
            </p>

            <BashCode code={sourcesmalllist} />

            <p>
                The first list will <span className="text-white font-semibold">result in (Small list)</span>:
            </p>

            <RegularList items={authors} sourceName={"author"} ItemComponent={AuthorSmallListItems}/>

            <p>
                The <span className="text-white font-semibold">source component with the large list</span> of data and the code is as follows:
            </p>

            <BashCode code={sourcelargelist} />

            <p>
                The second <span className="text-white font-semibold">list will result in (Large list)</span>:
            </p> 
            
            <RegularList items={authors} sourceName={"author"} ItemComponent={AuthorLargeListItems}/>

            <p>
                And reusing the code for a different list of items (in this case, it will be books):
            </p>

            <p>
                The first list will be (Small list):
            </p>

            <RegularList items={books} sourceName={"book"} ItemComponent={BooksSmallListItems}/>

            <p>
                The second list will be (Large list):
            </p>

            <RegularList items={books} sourceName={"book"} ItemComponent={BookLargeListItems}/>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="list-pattern"><span>Modal Pattern</span></p>} />
            </CustomTitleStyle>

            <p>
               In component-based architectures like React, <span className="text-white font-semibold"> integrating modals </span> is 
               often regarded as a React pattern. The modal's <span className="text-white font-semibold"> behavior and layout scoping </span> 
               typically utilize the <span className="text-white font-semibold"> children prop, separating layout concerns via JSX syntax </span>. 
               Let's explore this process step by step.
            </p>

            <p>
                so we have the modal code as follows:
            </p>

            <BashCode code={modalcode}/>

            <p>
            <span className="text-white font-semibold">ModalBackground </span> will contain 
            <span className="text-white font-semibold"> styles for the background once the modal get trigger </span>
                corresponding with this style component <span className="text-white font-semibold"> 
                {`<ModalBackground onClick={closeModal}>`} </span> and ModalContent
                will contain styles that are going to be applied to the content (that will be the children ) corresponding
                with this line of code <span className="text-white font-semibold"> {`<ModalContent onClick={stopPropagation}>`} </span>, 
                due to the nature behavior of the styles 3components it <span className="text-white font-semibold"> make highly custom the modal
                </span> These style components offer extensive customization for the modal, ensuring a clear separation of concerns:
            </p>

            <ul>
                <li>
                    <span className="text-white font-semibold"> reusability </span>
                </li>
                <li>
                    <span className="text-white font-semibold"> cross-functionality </span>
                </li>
                <li>
                <span className="text-white font-semibold"> design and behavior </span>
                </li>
            </ul>
            
            <Modal>
                <BooksSmallListItems book={books[0]}/>
            </Modal>

        </SectionWrapper>
        </div>
    )
}

export default LayoutComponentPattern;