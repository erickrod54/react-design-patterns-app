import { HomePage } from './pages/index.pages'

import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from 'react-router-dom';

/**react-design-patterns-app - version 1.07 - App js  
 * - Features: 
 * 
 *     --> Implementing React router 'V6'
 * 
 * Note: Pending to make responsive design
 */

function App() {
  return (
    <>
    <div className='grid justify-center'>
      <div className='bg-blue-600 p-24 flex justify-center items-center shadow-md border border-green-500 border-6 rounded-xl w-fit m-16'>
        <h1 className="color-font text-4xl"> React Design Patterns App </h1>
      </div>
    </div>

    <Router>
        <Routes>
                <Route index path='/' element={<HomePage />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
