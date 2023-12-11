import styled from "styled-components";
/**this is the tw macro import */
import tw from 'twin.macro';

/**react-design-patterns-app - version 2.04 - styled.components
 * - Features: 
 * 
 *     --> Adding custom classes and 'CustomTitleStyle'
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

export const SectionWrapper = styled.section`
    ${tw`m-12 p-12 mt-12 first-letter:capitalize text-lg`}

    ul{
        ${tw`m-4 p-4 list-decimal`} 
    }

    img{
        ${tw`mt-10 w-auto h-auto`}
    }

    p{
        ${tw`mt-6 mb-8 first-letter:capitalize`}
    }

    `

export const CustomTitleStyle = styled.div`

&{
    ${tw`flex justify-center items-center`}
}

.layout{
    color:yellow;
    text-decoration-line: underline;
}

`