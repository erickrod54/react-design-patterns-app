import React from "react";
import { Container, Panel } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 2.05 - components > index  
 * - Features: 
 * 
 *     --> Building 'SplitScreen' first layout component
 * 
 * Note: Pending to make responsive design
 */

const SplitScreen = ({ Left, Right }) => {

    return(
    <Container>
            <Panel>
                <Left />
            </Panel>
            <Panel>
                <Right />
            </Panel>
    </Container>
    )
}

export default SplitScreen;