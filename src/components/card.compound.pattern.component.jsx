import React from "react";

/**react-design-patterns-app - version 5.03 - CardCompound
 * - Features: 
 * 
 *     --> Building 'CardCompound' Pattern.
 * 
 * Note: this end component will handle the props destructuring and 
 * rendering
 */

const Header = ({children}) => {
    return(
        <div
             style={{
                borderBottom:"1px solid white",
                padding:".5rem",
                marginBottom:".5rem"
             }}   
            >
             {children}   
            </div>
    )
}

const Footer = ({children}) => {
    return(
        <div
            style={{
                borderTop:'1px solid white',
                padding:'.5rem',
                marginTop:'.5rem',
                }}
            >
            {children}
        </div>
    )
}

const Body = ({children}) => {
    return <div style={{padding: '.5rem'}}>{children}</div>;
}

/**here i clear the decomposition */
const CardCompound = ({ children }) => {

    return(
       <div style={{border: "1px solid white"}}>
         {children}
       </div>
    )
}

export default CardCompound;

/**here i attach them to the CardCompound */
CardCompound.Header = Header;
CardCompound.Footer = Footer;
CardCompound.Body = Body;
