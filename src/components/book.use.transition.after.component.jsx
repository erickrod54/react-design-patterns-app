import { useState, useTransition } from "react";
import { Cover, Reviews, Writer } from "./index.components";
import { BooksUseTransitionContainer, ButtonUseTransition } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 16.12 - BooksUseTransitionAfter
 * - Features: 
 * 
 *     --> Implementing 'startTransition'
 * 
 * Note: allows me to avoid the button freeze , so i can click in 
 * another section
 */

const  BooksUseTransitionAfter = () => {

  const [section, setSection] = useState("Cover");
  const [isPending, startTransition] = useTransition();

  const sectionHandler = (sec) => {
    /**allows me to avoid the button freeze , so i can click in another section*/
    startTransition(() => {
        setSection(sec);
    })
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
