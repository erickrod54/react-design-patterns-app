import { useMousePosition } from "../hooks/optimization.patterns.use.mouse.hook";

/**react-design-patterns-app - version 48.14 - TrackMouse
 * - Features: 
 * 
 *     --> writting  'TrackMouseWrapper' styled component
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const TrackMouseWrapper = styled.div`

`

const TrackMouse = (props) => {
  const position = useMousePosition();

  return (
    <TrackMouseWrapper>
        Last mouse position - <span> x: {position.x}, y: {position.y} </span>
    </TrackMouseWrapper>
  );
};

export default TrackMouse;