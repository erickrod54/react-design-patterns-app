import React from "react";
import { useParams } from "react-router-dom";
import { usePatternsAppContext } from "../context";
import { ContainerPattern, ControlledUnControlledPattern, HOCPattern, LayoutComponentPattern } from "../components/index.components";

/**react-design-patterns-app - version 4.10 - SinglePatternPage
 * - Features: 
 * 
 *     --> Displaying 'HOCPattern' content
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

    if ( Number(patternId) === 3 ) {
        return <ControlledUnControlledPattern />
    }

    if ( Number(patternId) === 4 ) {
        return <HOCPattern />
    }

}

export default SinglePatternPage;