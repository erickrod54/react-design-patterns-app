import ButtonAsCleanCodeAs from "./button.as.clean.code.tip.after.as.component";

/**react-design-patterns-app - version 17.11 - ButtonAsCleanCodeAppAfterWrap
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

const ButtonAsCleanCodeAppAfterPattern = () => {

  return (
    <div style={style}>
      <ButtonAsCleanCodeAs size="s">Small</ButtonAsCleanCodeAs>
      <ButtonAsCleanCodeAs size="m">Medium</ButtonAsCleanCodeAs>
      <ButtonAsCleanCodeAs size="l">Large</ButtonAsCleanCodeAs>
      <ButtonAsCleanCodeAs size="xl">xLarge</ButtonAsCleanCodeAs>

        <ButtonAsCleanCodeAs As='a' size="xl" href="/21" >
            Link
        </ButtonAsCleanCodeAs>
    </div>
  );
}

export default ButtonAsCleanCodeAppAfterPattern;