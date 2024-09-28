/**react-design-patterns-app - version 39.00 - getUuid
 * - Features: 
 * 
 *     --> Migrating 'getUuid' util 
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

//Generate an id for new shopping list items
export const getUuid = () => "_" + Math.random().toString(36).substr(2, 9);