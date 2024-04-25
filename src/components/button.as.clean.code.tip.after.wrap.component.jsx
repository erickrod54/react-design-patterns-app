import ButtonAsCleanCode from "./button.as.clean.code.tip.component";

/**react-design-patterns-app - version 17.06 - ButtonAsCleanCodeAppAfterWrap
 * - Features: 
 * 
 *     --> Building 'ButtonAsCleanCodeAppAfterWrap'
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

const ButtonAsCleanCodeAppAfterWrap = () => {

  return (
    <div style={style}>
      <ButtonAsCleanCode size="s">Small</ButtonAsCleanCode>
      <ButtonAsCleanCode size="m">Medium</ButtonAsCleanCode>
      <ButtonAsCleanCode size="l">Large</ButtonAsCleanCode>
      <ButtonAsCleanCode size="xl">xLarge</ButtonAsCleanCode>

        <ButtonAsCleanCode size="xl">
            <a href="/21">Link</a>
        </ButtonAsCleanCode>
    </div>
  );
}

export default ButtonAsCleanCodeAppAfterWrap;