import React, { useEffect, useState } from "react";
import { Link, MemoryRouter, Route, BrowserRouter as RouterLazy, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "./optimization.patterns.home.use.case";
import About from "./optimization.patterns.about.use.case";
import Contact from "./optimization.patterns.contact.use.case";
import { AppContainerNavigation } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 42.08 - LazyNavigation - 
 * - Features: 
 * 
 *     --> Migrating 'AppContainerNavigation' 
 * 
 * Note: This is the first topic
 */



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
  function LazyNavigation() {
    return (

            <AppContainerNavigation>
            <Heading>Advanced React - Codelicks Academy</Heading>
            <NavContainer>
                <Nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                </Nav>
            </NavContainer>
    
            {/* Input reflecting the current route */}
            <RouteReflector />
    
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </AppContainerNavigation>

    );
  }
  
  export default LazyNavigation;
  
 