import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs'; // You'll need to have Prism.js installed

// Import the language-specific syntax highlighting styles
import 'prismjs/components/prism-cshtml';
import { AtomOneLight } from '../styledcomponents/styled.components';
import { clipboard } from '../assets/index.assets';

/**react-design-patterns-app - version 2.11 - BashCode
 * - Features: 
 * 
 *     --> Fixing bug for 'button' for the 'copyToClipboard'
 * 
 * Note: The clipboard was on top of the screen
 */

const BashCode = ({ code }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  const copyToClipboard = () => {
    if (codeRef && codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.textContent)
        .then(() => {
          // Handle successful copy
          console.log('Code copied to clipboard!');
          // You can add further feedback/notification here if needed
        })
        .catch(err => {
          // Handle errors
          console.error('Failed to copy:', err);
        });
    }
  };

  return (
    <AtomOneLight>
      <div className='sm:w-66'>
        <pre>
        <button onClick={copyToClipboard} >
          <img src={clipboard} alt='clipboard' className='mt-0 p-4 hover:bg-green-300 duration-75 rounded-md'/>
        </button>
          <code ref={codeRef} className="lang-js">
            {code}
          </code>
        </pre>
      </div>
    </AtomOneLight>
  );
};

export default BashCode;
