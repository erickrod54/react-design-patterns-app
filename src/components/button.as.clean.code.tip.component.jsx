import styles from "./button.as.clean.code.module.css";

/**react-design-patterns-app - version 16.17 - ButtonAsCleanCodeApp
 * - Features: 
 * 
 *     --> Building 'ButtonAsCleanCode'
 * 
 * Note: the 'ButtonAsCleanCode' will be the pattern for 
 * 'ButtonAsCleanCodeApp'
 */

const ButtonAsCleanCode = ({ size = "m", className = "", ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
};

export default ButtonAsCleanCode;
