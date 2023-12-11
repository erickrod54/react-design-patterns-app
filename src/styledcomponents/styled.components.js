import styled from "styled-components";
/**this is the tw macro import */
import tw from 'twin.macro';

/**react-design-patterns-app - version 2.02 - styled.components
 * - Features: 
 * 
 *     --> Building SectionWrapper 
 * 
 * Note: the macro 'tw' in order to work and use has to be installed
 * there is around 4 or 5 libraries and this is oen of the most active
 * and recent
 * 
 *          https://www.npmjs.com/package/twin.macro
 */

export const SectionWrapper = styled.section`
    ${tw`m-12 p-12 mt-12 first-letter:capitalize text-lg`}
`