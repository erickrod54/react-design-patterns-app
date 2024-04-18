import { useState, useTransition } from "react";
import { Cover, Reviews, Writer } from "./index.components";
import { BooksUseTransitionContainer, ButtonUseTransition } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 16.11 - BooksUseTransitionAfter
 * - Features: 
 * 
 *     --> Building 'BooksUseTransitionAfter'
 * 
 *     --> Adding 'useTransition' hook 
 * 
 * Note: the BooksUseTransitionBefore component that
 * is going to hold book cover, reviews, and writter 
 * components
 */

const  BooksUseTransitionAfter = () => {

  const [section, setSection] = useState("Cover");
  const [isPending, startTransition] = useTransition();

  const sectionHandler = (sec) => {
    setSection(sec);
  };
  return (
    <BooksUseTransitionContainer>
      <div>
        <ButtonUseTransition onClick={() => sectionHandler("Cover")}>
            Book Cover
        </ButtonUseTransition>
        <ButtonUseTransition onClick={() => sectionHandler("Reviews")}>
            Book Reviews
        </ButtonUseTransition>
        <ButtonUseTransition onClick={() => sectionHandler("Writer")}>
            Book's Writer
        </ButtonUseTransition>
      </div>  

      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
        
    </BooksUseTransitionContainer>
  );
}

export default BooksUseTransitionAfter;
