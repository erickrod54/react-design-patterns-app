import React from "react";
import CustomTitle from "./custom.title.component";
import { CustomTitleStyle } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.03 - MessageLocalStorage
 * - Features: 
 * 
 *     --> Building 'MessageLocalStorage' .
 * 
 * Note: this component will render a message from other source
 */

const MessageLocalStorage = ({msg}) => {

    return(
        <CustomTitleStyle>
                <CustomTitle  title={<p className="container-local-storage"><span >{msg}</span></p>} />
        </CustomTitleStyle>
    )
}

export default MessageLocalStorage;