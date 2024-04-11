import { useState } from "react";
import { Cover, Reviews, Writer } from "./index.components";
import { ButtonUseTransition } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 15.10 - BooksUseTransitionBefore
 * - Features: 
 * 
 *     --> Adding 'ButtonUseTransition' button
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
      <ButtonUseTransition onClick={() => sectionHandler("Cover")}>
        Book Cover
      </ButtonUseTransition>
      <ButtonUseTransition onClick={() => sectionHandler("Reviews")}>
        Book Reviews
      </ButtonUseTransition>
      <ButtonUseTransition onClick={() => sectionHandler("Writer")}>
        Book's Writer
      </ButtonUseTransition>

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
