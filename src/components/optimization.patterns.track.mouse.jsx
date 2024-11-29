import { useMousePosition } from "../hooks/optimization.patterns.use.mouse.hook";

/**react-design-patterns-app - version 48.16 - TrackMouse
 * - Features: 
 * 
 *     --> Adding  'TrackMouseWrapper' background and font color
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const TrackMouseWrapper = styled.div`
    margin: auto;
    margin-top: 4rem;
    padding: 2rem;
    background: blueviolet;
    color: white;
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