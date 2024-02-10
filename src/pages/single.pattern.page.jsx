import React from "react";
import { useParams } from "react-router-dom";
//import { usePatternsAppContext } from "../context";
import { ContainerPattern, ControlledUnControlledPattern, CustomHookPattern, ForwardingRefs, FunctionalProgramming, HOCPattern, LayoutComponentPattern, PortalsAdvHooks, } from "../components/index.components";

/**react-design-patterns-app - version 7.18 - SinglePatternPage
 * - Features: 
 * 
 *     --> Adding 'ForwardingRefs'
 * 
 * Note: the cards components with the card information
 * will be displayed here
 */

const SinglePatternPage = () => {

    //const { patternCard } = usePatternsAppContext()

    const { patternId } = useParams();

    //console.log('the pattern id==>', useParams())

    //console.log('patternCard from SinglePatternPage ==> ', patternCard)
    
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

    if ( Number(patternId) === 5 ) {
        return <CustomHookPattern />
    }

    if ( Number(patternId) === 6 ) {
        return <FunctionalProgramming />
    }

    if ( Number(patternId) === 7 ) {
        return <PortalsAdvHooks />
    }

    if ( Number(patternId) === 8 ) {
        return <ForwardingRefs />
    }
}

export default SinglePatternPage;