import api from './api.layer.use.case.quotes.with.fn'

/**react-design-patterns-app - version 25.05- api file
 * - Features: 
 * 
 *     --> Building 'fetchTopQuotes'
 *
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

export const fetchTopQuotes = () => 
    api.get("top_quotes").then((res) => res.data.quotes)