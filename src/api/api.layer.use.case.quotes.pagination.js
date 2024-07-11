import api from './api.layer.use.case.quotes.with.fn'

/**react-design-patterns-app - version 27.05- api pagination
 * - Features: 
 * 
 *     --> Building 'fetchQuotesByPage' 
 *
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

export const fetchTopQuotes = () =>
    api.get("top_quotes").then((res) => res.data.quotes);
  
  export const postQuote = (quote) => api.post("", quote);
  export const resetQuotes = () => api.post("reset", {});

  export const fetchQuotesByPage = (page) => 
    api.get("",{params: {page}}).then((res) => res.data);