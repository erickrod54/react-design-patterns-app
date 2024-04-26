import styles from "./button.as.clean.code.module.css";

/**react-design-patterns-app - version 17.08 - ButtonAsCleanCodeApp
 * - Features: 
 * 
 *     --> Building 'ButtonAsCleanCode'
 * 
 * Note: the 'ButtonAsCleanCode' will be the pattern for 
 * 'ButtonAsCleanCodeApp'
 */

const ButtonAsCleanCodeAs = ({ As = "button", size = "m", className = "", ...otherProps }) => {
  return (
    <As
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
};

export default ButtonAsCleanCodeAs;
