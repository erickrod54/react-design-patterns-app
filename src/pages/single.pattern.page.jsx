import React from "react";
import { useParams } from "react-router-dom";
//import { usePatternsAppContext } from "../context";
import { AdvancedHooks, ApiLayerAndAsync, CleanCodeTips, ContainerPattern,
         ControlledUnControlledPattern,
         CustomHookPattern,
         DebouncingExecutions,
         ErrorBoundaries,
         FetchingDataWitReactQuery,
         ForwardingRefs,
         FunctionalProgramming,
        HOCPattern,
        LayoutComponentPattern,
        LazyAndCodeSplittingPerformance,
        PortalsAdvHooks,
         RenderingOptimization,
         StateManagementPatterns,
         ThrottlingRendering,
         UseCasesMealApiSearch, } from "../components/index.components";


/**react-design-patterns-app - version 49.10 - SinglePatternPage
 * - Features: 
 * 
 *     --> Adding 'DebouncingExecutions'
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

    if ( Number(patternId) === 9 ) {
        return <ErrorBoundaries />
    }
    
    if ( Number(patternId) === 10 ) {
        return <AdvancedHooks />
    }

    if ( Number(patternId) === 21 ) {
        return <CleanCodeTips />
    }

    if ( Number(patternId) === 34 ) {
        return <ApiLayerAndAsync />
    }

    if ( Number(patternId) === 35 ) {
        return <UseCasesMealApiSearch />
    }

    if ( Number(patternId) === 36 ) {
        return <FetchingDataWitReactQuery />
    }

    if ( Number(patternId) === 37 ) {
        return <StateManagementPatterns />
    }

    if ( Number(patternId) === 38 ) {
        return <LazyAndCodeSplittingPerformance />
    }

    if ( Number(patternId) === 39 ) {
        return <RenderingOptimization/>
    }

    if ( Number(patternId) === 40 ) {
        return <ThrottlingRendering/>
    }

    if ( Number(patternId) === 41 ) {
        return <DebouncingExecutions />
    }

}

export default SinglePatternPage;