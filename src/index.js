import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PatternsAppProvider } from './context';

/**react-design-patterns-app - version 1.01 - index js  
 * - Features: 
 * 
 *     --> Wrapping the 'App' with the provider
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PatternsAppProvider>
      <App />
    </PatternsAppProvider>
  </React.StrictMode>
);

