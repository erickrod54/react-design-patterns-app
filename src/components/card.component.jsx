import React from "react";

/**react-design-patterns-app - version 5.03 - Card
 * - Features: 
 * 
 *     --> Building 'Card' Component.
 * 
 * Note: this end component will handle the props destructuring and 
 * rendering
 */

const Card = ({ header, footer, children }) => {

    return(
       <div style={{border: "1px solid white"}}>
         {header && (
            <div
             style={{
                borderBottom:"1px solid white",
                padding:".5rem",
                marginBottom:".5rem"
             }}   
            >
             {header}   
            </div>
         )}
         <div style={{padding: '.5rem'}}>{children}</div>
         {footer && (
            <div
                style={{
                    borderTop:'1px solid white',
                    padding:'.5rem',
                    marginTop:'.5rem',
                }}
            >
            {footer}
            </div>
         )}
       </div>
    )
}

export default Card;