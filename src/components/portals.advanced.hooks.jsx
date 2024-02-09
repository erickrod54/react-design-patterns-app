import React from "react";
import CustomTitle from "./custom.title.component";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import { AlertMessage, AlertMessageWithPortal, BashCode } from './index.components'
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 7.17 - PortalsAdvHooks
 * - Features: 
 * 
 *     --> Placing 'AlertMessageWithPortal' Component
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

const PortalsAdvHooks = () => {

    const { CodeData } = usePatternsAppContext();

    const alertcode = CodeData[58].code;
    const alertmessagecode = CodeData[59].code;
    const alertcodeinner = CodeData[60].code;
    const alertportalcode = CodeData[61].code;
    

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
                    with a <span className="text-white font-semibold"> Modal Dialogs </span>. 
                </p>

                <p>
                    so the modal dialog code <span className="text-white font-semibold"> before </span> applying 
                    the <span className="text-white font-semibold"> Portal pattern </span> will be as follows:
                </p>

                <AlertMessage />

                <br/>
                <br/>
                <p>
                    the code for the <span className="text-white font-semibold"> Modal Dialog </span> ( rehusing some code of the Modal component )
                </p>

                <BashCode code={alertcode}/>

                <p>
                    And the component that controls <span className="text-white font-semibold"> Alert </span> 
                    behavior will be <span className="text-white font-semibold"> AlertMeesage </span> as follows:
                </p>

                <BashCode code={alertmessagecode}/>

                <p>
                    so let's say i need the <span className="text-white font-semibold"> functionality </span> of 
                    <span className="text-white font-semibold"> Alert </span> working in <span className="text-white font-semibold"> 
                    another place of the App </span>  without affecting the original AlertMessage behavior and avoiding 
                    to make also a major refactor
                </p>

                <BashCode code={alertcodeinner}/>

                <p>
                    so this <span className="text-white font-semibold"> logic and styles </span> can be completely pass throuhgt 
                    a portal without <span className="text-white font-semibold"> affectting the original component </span> 
                    ( here i create a different version, but can be done also in the original component code as well ):
                </p>

                <BashCode code={alertportalcode}/>

                <p>
                    resulting in:
                </p>

                <AlertMessageWithPortal />
                

            </SectionWrapper>
        </div>
    )
}

export default PortalsAdvHooks;