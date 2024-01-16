/**react-design-patterns-app - version 4.18 - Composition Pattern
 * - Features: 
 * 
 *     --> Writting small size as '24px'.   
 * 
 * Note: this end component will handle the props destructuring and 
 * rendering
 */

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


export const RedButton = props => {
    return(
        <Button {...props} color={'crimson'}/>
    )
}

export const GreenButton = props => {
    return(
        <Button {...props} color={'green'} size={'small'}/>
    )
}