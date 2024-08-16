import { useState } from "react";
import { BooksUseTransitionContainer, ListWrapper, PrimaryButton, SecondaryButton, SingleButtonWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 32.07 - PersonState
 * - Features: 
 * 
 *     -->  Building 'PersonState' styles to tailwind
 * 
 * Note: the macro 'tw' in order to work and use has to be installed
 * there is around 4 or 5 libraries and this is oen of the most active
 * and recent
 * 
 *          https://www.npmjs.com/package/twin.macro
 * 
 * i have to create a root access custom color palette in order 
 * to use them in the custom titles
 */


const PersonState = () => {
    const [ person, setPerson ] = useState({
        name: "Superman",
    })

    const onChange = () => {
        setPerson({...person, age: 24})
    }

    const onReset = () => {
        setPerson({...person, age: 0})
    }

    const { name, age } = person;

    return(
        <ListWrapper>
            <BooksUseTransitionContainer>
                <div>
                    <PrimaryButton>
                        <button onClick={onChange}>set age</button>
                    </PrimaryButton>  
                    
                    <SecondaryButton>
                        <button onClick={onReset}>reset age</button>
                    </SecondaryButton>
                </div>
            </BooksUseTransitionContainer>
             <h2> Person Name:</h2>
             <h2 className="author-name"><span>{name}</span></h2>

             {age ? 
             <p><span>Age: </span> {age} years</p>
             :
             null
            }
        </ListWrapper>
    )
}

export default PersonState;
