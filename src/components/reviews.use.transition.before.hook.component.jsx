import React from "react";

/**react-design-patterns-app - version 15.05 - Reviews
 * - Features: 
 * 
 *     --> Building 'Reviews' component
 * 
Note: the Reviews component for the useTransition 
 * pattern  
 */

const Reviews = () => {
  return (
    <>
      <ul>
        {Array(300)
          .fill("")
          .map((_, i) => (
            <Review key={i} index={i} />
          ))}
      </ul>
    </>
  );
};

const Review = ({ index }) => {
  const init = performance.now();
  while (init > performance.now() - 3) {
    // Fake slow down.
  }
  return <li>Review #{index}</li>;
};

export default Reviews;
