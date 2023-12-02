import React from "react";
import { useParams } from "react-router-dom";
import { usePatternsAppContext } from "../context";
import { LayoutComponentPattern } from "../components/index.components";

/**react-design-patterns-app - version 1.08 - SinglePatternPage
 * - Features: 
 * 
 *     --> Building 'Single Pattern Page'
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
}

export default SinglePatternPage;