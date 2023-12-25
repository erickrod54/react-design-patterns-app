import React from "react";
import { useParams } from "react-router-dom";
import { usePatternsAppContext } from "../context";
import { ContainerPattern, LayoutComponentPattern } from "../components/index.components";

/**react-design-patterns-app - version 3.06 - SinglePatternPage
 * - Features: 
 * 
 *     --> Displaying 'ContainerPattern' content
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const SinglePatternPage = () => {

    const { patternCard } = usePatternsAppContext()

    const { patternId } = useParams();

    console.log('the pattern id==>', useParams())

    console.log('patternCard from SinglePatternPage ==> ', patternCard)
    
    if ( Number(patternId) === 1 ) {
        return <LayoutComponentPattern />
    }

    if ( Number(patternId) === 2 ) {
        return <ContainerPattern />
    }

}

export default SinglePatternPage;