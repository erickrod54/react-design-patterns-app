import React from "react";


/**react-design-patterns-app - version 5.02 - partialComponent 
 * - Features: 
 * 
 *     --> Fixing 'fucsia' to hex typo
 * 
 * Note: Pending to make responsive design
 */


/**i receive a 'Component' as a prop and the 'partialProps' */
export const partialComponent = (Component, partialProps) => {
    return props => {
        /**and i return the 'Component' with the 'partialProps' 
         * and the rest of the 'props'*/
        return <Component {...partialProps} {...props}/>
    }
}


export const Button = ({ size, color, text, ...props }) => {

    return(
        <button
            style={{
                fontSize: size === "small" ? '24px' : '32px',
                border: `3px solid ${color}`,
                color: color,
                margin:'1rem',
                padding:'1rem',
                borderRadius: '0.5rem', 
            }}
        >
            {text}
        </button>
    )
}

/**i am rehusing the components with part of the props an not all of them
* 'color' and 'size' and creating custom three versions of the button
*/

/**the partial props are passed as key values ( an object ) */
export const WarningButton = partialComponent(Button, {color:'yellow'});
export const SmallWarning = partialComponent(WarningButton, {size:'small'})
export const Secondary = partialComponent(Button, {color:'#FF00FF'})