import React from "react";
import { Container, Panel } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 2.06 - components > index  
 * - Features: 
 * 
 *     --> Adding background colors to each Panel
 * 
 * Note: Pending to make responsive design
 */

const SplitScreen = ({ Left, Right }) => {

    return(
    <Container>
            <Panel className="bg-red-400">
                <Left />
            </Panel>
            <Panel className="bg-red-500">
                <Right />
            </Panel>
    </Container>
    )
}

export default SplitScreen;