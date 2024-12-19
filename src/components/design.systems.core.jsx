import React from "react";
import {  CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import CustomTitle from "./custom.title.component";
import { usePatternsAppContext } from "../context";


/**react-design-patterns-app - version 52.04 - FetchingDataWitReactQuery
 * - Features: 
 * 
 *     --> Adding 'DesignSystemCore' pillars
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
            </SectionWrapper>
        </div>
    )
}

export default DesignSystemCore;