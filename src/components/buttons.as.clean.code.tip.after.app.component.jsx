import ButtonAsCleanCode from "./button.as.clean.code.tip.component";

/**react-design-patterns-app - version 17.04 - ButtonAsCleanCodeAppAfter
 * - Features: 
 * 
 *     --> Refactoring href to "/21"
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
 */

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
};

const ButtonAsCleanCodeAppAfter = () => {

  return (
    <div style={style}>
      <ButtonAsCleanCode size="s">Small</ButtonAsCleanCode>
      <ButtonAsCleanCode size="m">Medium</ButtonAsCleanCode>
      <ButtonAsCleanCode size="l">Large</ButtonAsCleanCode>
      <ButtonAsCleanCode size="xl">xLarge</ButtonAsCleanCode>
      <a href="/21">Link</a>
    </div>
  );
}

export default ButtonAsCleanCodeAppAfter;