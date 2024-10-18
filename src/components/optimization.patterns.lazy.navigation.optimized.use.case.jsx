import { styled } from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import LazyLoader from "./optimization.patterns.lazy.loader.component";

/**react-design-patterns-app - version 42.05 - data js  
 * - Features: 
 *    
 *     --> Renaming 'LazyNavigation to 'LazyNavigationOptimized' 
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

const Home = lazy(() => import("./optimization.patterns.home.use.cases"));
const About = lazy(() => import("./optimization.patterns.about.use.cases"));
const Contact = lazy(() => import("./optimization.patterns.contact.use.cases"));

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 6xl;
  text-align: center;
  margin-top: 8rem;
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 2xl;
`;

const NavContainer = styled.div`
  margin-top: 8rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

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
    <AppContainer>
      <Heading>Optimized Pattern! - Lazy Loading and Code Splitting</Heading>
      <NavContainer>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
      </NavContainer>

      {/* Input reflecting the current route */}
      <RouteReflector />
      <Suspense fallback={<LazyLoader show delay={500} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AppContainer>
  );
}

export default LazyNavigationOptimized;