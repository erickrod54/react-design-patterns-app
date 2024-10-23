import { styled } from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import LazyLoader from "./optimization.patterns.lazy.loader.component";
import { AppContainerOptimized, HeadingOptimized, NavContainerOptimized, NavOptimized } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 42.16 - LazyNavigationOptimized js  
 * - Features: 
 *    
 *     --> Migrating 'NavContainerOptimized' 
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

const Home = lazy(() => import("./optimization.patterns.home.use.cases"));
const About = lazy(() => import("./optimization.patterns.about.use.cases"));
const Contact = lazy(() => import("./optimization.patterns.contact.use.cases"));



// RouteReflector Component
const RouteReflector = () => {
  const location = useLocation(); // Hook to get current location/path
  const [scopedPath, setScopedPath] = useState(location.pathname); // Local state to hold the scoped path

  // Update the scoped path whenever the location changes
  useEffect(() => {
    setScopedPath(location.pathname);
  }, [location]);

  return (
    <input
      type="text"
      value={scopedPath} // Reflecting the current path in the input
      readOnly
      className="border p-2"
    />
  );
};

// LazyNavigation Component
function LazyNavigationOptimized() {
  return (
    <AppContainerOptimized>
      <HeadingOptimized>Optimized Pattern! - Lazy Loading and Code Splitting</HeadingOptimized>
      <NavContainerOptimized>
        <NavOptimized>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </NavOptimized>
      </NavContainerOptimized>

      {/* Input reflecting the current route */}
      <RouteReflector />
      <Suspense fallback={<LazyLoader show delay={500} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AppContainerOptimized>
  );
}

export default LazyNavigationOptimized;