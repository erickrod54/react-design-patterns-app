import React from "react";
import { ListWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 2.15 - RegularList
 * - Features: 
 * 
 *     --> Building 'RegularList' in order to rehuse this
 *          component to display small and large lists
 * 
 * Note: The props are:
 * 
 *      items---------------> these are the items that 
 *                          are going to be display in 
 *                          the list ( the data )
 * 
 *      sourceName----------> is the prop name where the
 *                            data is destructured in the 
 *                            source component ( the name 
 *                             of the data to be destructured)
 * 
 *      ItemComponent-------> it is the source component or 
 *                            the source component
 * 
 * 
 * the spread operator is use in order to get all the source
 * resources as they are
 */

const RegularList = ({ items, sourceName, ItemComponent }) => {

    return(
        <ListWrapper>
            {items.map((item, index) => <ItemComponent key={index} { ...{[sourceName]: item}}/> )}
        </ListWrapper>
    )

}

export default RegularList;