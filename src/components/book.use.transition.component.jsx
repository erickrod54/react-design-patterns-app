import { useState } from "react";
import { Cover, Reviews, Writer } from "./index.components";

/**react-design-patterns-app - version 15.08 - Writer
 * - Features: 
 * 
 *     --> Adding transition for 'BooksUseTransitionBefore' component
 * 
 * Note: the BooksUseTransitionBefore component that
 * is going to hold book cover, reviews, and writter 
 * components
 */

const  BooksUseTransitionBefore = () => {
  const [section, setSection] = useState("Cover");

  const sectionHandler = (sec) => {
    setSection(sec);
  };
  return (
    <>
      <button onClick={() => sectionHandler("Cover")}>
        Book Cover
      </button>
      <button onClick={() => sectionHandler("Reviews")}>
        Book Reviews
      </button>
      <button onClick={() => sectionHandler("Writer")}>
        Book's Writer
      </button>

      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
        
    </>
  );
}

export default BooksUseTransitionBefore;
