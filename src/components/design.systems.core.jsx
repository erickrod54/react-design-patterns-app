import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";


/**react-design-patterns-app - version 52.09 - FetchingDataWitReactQuery
 * - Features: 
 * 
 *     --> Adding ' OnBoarding ' worflow
 * 
 * Note: This is the introduction to design systems
*/

const DesignSystemCore = () => {

    const { CodeData } = usePatternsAppContext();
    

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="design-system-core"><span > Design System Core </span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
                
                <p>
                    the design and development of robust systems, along wiht cohesive design systems is by understanding and 
                    <span className="text-white font-semibold"> integrating all these 4 pillars </span> and these are 
                    as follows:
                </p>

            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Design Language </span> (  The foundation of a design system, including color palettes and typography )
                </li>
                <li>
                    <span className="text-white font-semibold"> UI Kits </span> ( Tools like Figma to create and organize design components )
                </li>
                <li>
                    <span className="text-white font-semibold"> Component Libraries </span> ( Using libraries like React and Angular to build reusable UI components )
                </li>
                <li>
                    <span className="text-white font-semibold"> Style Guides </span> ( ools like Gatsby, JS, and Storybook to document and implement the visual and functional aspects of a design system. )
                </li>
            </ul>

                <p>
                    so taking some more detail on <span className="text-white font-semibold"> every design system pillar </span> 
                    , starting by <span className="text-white font-semibold"> Design Language </span>:
                </p>

            <ul className="list-white-space">
                <li>
                    This is the foundation of a design system and includes <span className="text-white font-semibold"> color palettes, typography, spacing, grid systems, and more. It defines 
                    the visual identity of a product or brand. </span> 
                </li>
                <li>
                    <span className="text-white font-semibold"> Color palettes </span> help maintain <span className="text-white font-semibold"> consistent color usage across a product,
                    </span> ensuring <span className="text-white font-semibold"> accessibility and brand recognition. </span>
                </li>
                <li>
                    <span className="text-white font-semibold"> Typography </span> determines the <span className="text-white font-semibold"> fonts, sizes, and line spacings </span>  that 
                    create a <span className="text-white font-semibold"> readable and cohesive experience across different devices. </span>
                </li>
            </ul>

                <p>
                    then following on <span className="text-white font-semibold"> UI Kits </span>:
                </p>
            
            <ul className="list-white-space">
                <li>
                    A <span className="text-white font-semibold"> UI kit is a collection of reusable elements </span> such as 
                    <span className="text-white font-semibold"> buttons, icons, forms, and other visual 
                    components.</span> These elements are <span className="text-white font-semibold"> pre-designed in a tool like Figma </span> and act 
                    <span className="text-white font-semibold"> as building blocks for creating consistent and scalable user interfaces.</span> 
                </li>
                <li>
                    <span className="text-white font-semibold"> UI kits streamline the design process by giving designers ready-to-use components </span>, 
                    ensuring <span className="text-white font-semibold"> consistency in UI elements throughout
                    the design. </span>
                </li>
            </ul>

            <p>
                    then following on <span className="text-white font-semibold"> Component Libraries </span>:
                </p>
            
            <ul className="list-white-space">
                <li>
                    <span className="text-white font-semibold"> Component libraries </span> are repositories of 
                    <span className="text-white font-semibold"> reusable UI components,</span> usually developed with a 
                    specific <span className="text-white font-semibold"> framework like React, Angular, or Vue. </span>
                </li>
                <li>
                     These components are <span className="text-white font-semibold"> pre-built, tested, and ready to be used by developers </span>, 
                     <span className="text-white font-semibold"> saving time and reducing errors. </span>
                     A <span className="text-white font-semibold"> component library can include elements such as buttons, modals, form fields, and navigation components. </span>
                </li>
                <li>
                    The key benefit here is <span className="text-white font-semibold"> reusability—once a component </span> is built and added to the 
                    <span className="text-white font-semibold"> library, it can be used across multiple projects or pages. </span>
                </li>
            </ul>

            <p>
                    then following on <span className="text-white font-semibold"> Style Guides </span>:
                </p>
            
            <ul className="list-white-space">
                <li>
                    A style guide is a <span className="text-white font-semibold"> detailed document or a set of rules </span> 
                    that explains <span className="text-white font-semibold"> how the design system components should be used. </span>
                     It includes <span className="text-white font-semibold"> guidelines for typography, spacing, color usage, interaction 
                    patterns, and accessibility considerations. </span>
                </li>
                <li>
                     <span className="text-white font-semibold"> Storybook and Gatsby </span> are examples of <span className="text-white font-semibold"> 
                     tools used to document and showcase these components interactively.</span> With 
                     <span className="text-white font-semibold"> Storybook, developers and designers can see the components in action,</span>
                      while <span className="text-white font-semibold"> Gatsby can be used to build static 
                     sites </span> that document the design system.
                </li>
                <li>
                    <span className="text-white font-semibold"> Style guides help everyone in the team </span> (designers, developers, product managers) 
                    stay <span className="text-white font-semibold"> aligned on how to implement the design system. </span>
                </li>
            </ul>

            <p>
                    so an implementation of a design system can be included in a <span className="text-white font-semibold"> Onboarding for new team members </span>:
                </p>
            
            <ul className="list-white-space">
                <li>
                    Provide a <span className="text-white font-semibold"> central style guide that helps new members quickly access necessary 
                    information to start working on the project.</span>
                </li>
                <li>
                    <span className="text-white font-semibold"> Once the design system is stable, UI kits </span>  help designers 
                    <span className="text-white font-semibold"> prototype quickly </span>
                </li>
                <li>
                    <span className="text-white font-semibold"> Developers can use the component library </span> to build features 
                    <span className="text-white font-semibold"> rapidly with pre-designed components. </span>
                </li>
                <li>
                    <span className="text-white font-semibold"> Designers and developers </span> can work seamlessly because both have 
                    <span className="text-white font-semibold"> access to the same, pre-built, and pre-designed resources </span>
                </li>
            </ul>
            
            </SectionWrapper>
        </div>
    )
}

export default DesignSystemCore;