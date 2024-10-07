import React, { useEffect, useState } from "react";
import { Link, MemoryRouter, Route, BrowserRouter as RouterLazy, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "./optimization.patterns.home.use.case";
import About from "./optimization.patterns.about.use.case";
import Contact from "./optimization.patterns.contact.use.case";

/**react-design-patterns-app - version 40.05 - LazyNavigation - 
 * - Features: 
 * 
 *     --> writting 'LazyNavigation' styles
 * 
 * Note: This is the first topic
 */

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
  
 