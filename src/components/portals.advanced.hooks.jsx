import React from "react";
import CustomTitle from "./custom.title.component";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
//import AlertMessage from "./alert.message.component";

/**react-design-patterns-app - version 5.18 - PortalsAdvHooks
 * - Features: 
 * 
 *     --> Developing 'Portals' exersice
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

const PortalsAdvHooks = () => {

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="advanced-hooks-portals"><span >Portals </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
                <p>
                    In essence, <span className="text-white font-semibold"> React portals </span> offer a versatile mechanism 
                    for managing the placement and rendering of components, providing solutions to a variety of <span className="text-white font-semibold"> 
                    UI challenges beyond traditional DOM manipulation.</span>
                </p>

                <p>
                    the primary purpose of portals is to <span className="text-white font-semibold"> facilitate rendering elements outside their parent component's
                    DOM hierarchy </span>, this flexibility opens up several possibilities.
                </p>

                <CustomTitleStyle>
                    <CustomTitle  title={<p className="advanced-hooks-portals-cases"><span >Portals use Cases: ( these are some of them )</span></p>} />
                </CustomTitleStyle>
                
                
                <ul>
                    <li>
                        <span className="text-white font-semibold"> Modal Dialogs and Popovers: </span> 
                        <p>
                            Portals are commonly used to render modal dialogs or popovers outside the main content area to avoid styling conflicts.
                        </p>
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Third-Party Integrations:</span>
                        <p>
                            When integrating with third-party libraries or components that expect rendering in a specific DOM location, 
                            portals can help achieve seamless integration.
                        </p>
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Managing Z-Index: </span>
                        <p>
                            Portals are useful for managing the z-index of elements, ensuring they appear above other 
                            UI elements regardless of their position in the component tree.
                        </p>
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Optimizing Performance:</span>
                        <p>
                            By rendering complex or resource-intensive components in a separate DOM node, portals can 
                            contribute to performance optimization, avoiding unnecessary re-renders of the entire component tree.
                        </p>
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Drag and Drop Interfaces: </span>
                        <p>
                            Portals can be employed in drag-and-drop interfaces, allowing dragged elements to be rendered at a 
                            higher level in the DOM for smoother user interactions.
                        </p>
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Global UI State Management: </span>
                        <p>
                            Portals can facilitate rendering elements that need to access global UI state, providing 
                            a way to connect them to a centralized state management system.
                        </p>
                    </li>
                    <li>
                        <span className="text-white font-semibold"> Dynamic Component Loading: </span>
                        <p>
                            Portals can be useful when dynamically loading components at runtime, rendering them in 
                            specific DOM locations as needed.
                        </p>
                    </li>
                </ul>

                <CustomTitleStyle>
                    <CustomTitle  title={<p className="advanced-hooks-portals-cases"><span >Portals exersice:</span></p>} />
                </CustomTitleStyle>

                <p>
                    this exercise is going to mix some essensial <span className="text-white font-semibold"> DOM manipulation </span>
                    with a <span className="text-white font-semibold"> Modal Dialogs </span>, as follows:
                </p>

            </SectionWrapper>
        </div>
    )
}

export default PortalsAdvHooks;