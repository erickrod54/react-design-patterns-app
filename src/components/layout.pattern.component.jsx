import React from "react";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components.index";
import { SplitScreen } from "./index.components";
import { LeftSideComponent, RightSideComponent } from "./prop-sub-components/prop.components.index";

/**react-design-patterns-app - version 2.09 - LayoutComponentPattern 
 * - Features: 
 * 
 *     --> Developing 'Layout' pattern ( in progress )
 * 
 * Note: This is the first topic
 */

const LayoutComponentPattern = () => {

    const { ImagesData } = usePatternsAppContext();

    
    const { list } = ImagesData[0]
    
    const layoutexamples = list[0].image;
    const sidebarexample = list[1].image;

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
            
            <p>
                Example of split screen pattern:
            </p>

            <SplitScreen Left={LeftSideComponent} Right={RightSideComponent} leftWidth={1} rightWidth={3}/>

            <p>
                where the left side has a <span className="text-white font-semibold"> flex value of 1 </span> and the right side has a 
                <span className="text-white font-semibold"> flex value of 3</span> 
            </p>
        </SectionWrapper>
        </div>
    )
}

export default LayoutComponentPattern;