import { useEffect, useState } from "react";

/**react-design-patterns-app - version 48.19 - useMousePosition
 * - Features: 
 * 
 *     --> Building 'useMousePositionNotThrottling'
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

export const useMousePositionNotThrottling = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setPosition({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return position;
};