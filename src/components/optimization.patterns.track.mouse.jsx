import { useMousePosition } from "../hooks/optimization.patterns.use.mouse.hook";

/**react-design-patterns-app - version 48.08 - TrackMouse
 * - Features: 
 * 
 *     --> Building  'TrackMouse' 
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const TrackMouse = (props) => {
  const position = useMousePosition();

  return (
    <div>
      Last mouse position - x: {position.x}, y: {position.y}
    </div>
  );
};

export default TrackMouse;