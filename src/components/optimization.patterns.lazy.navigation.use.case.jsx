import React, { useEffect, useState } from "react";
import { Link, MemoryRouter, Route, BrowserRouter as RouterLazy, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "./optimization.patterns.home.use.case";
import About from "./optimization.patterns.about.use.case";
import Contact from "./optimization.patterns.contact.use.case";

/**react-design-patterns-app - version 40.04 - LazyNavigation - 
 * - Features: 
 * 
 *     --> Building 'RouteReflector'
 * 
 * Note: This is the first topic
 */



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
  
 