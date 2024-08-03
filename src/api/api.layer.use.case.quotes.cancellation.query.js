import api from './api.layer.use.case.quotes.with.fn'

/**react-design-patterns-app - version 30.08- api pagination
 * - Features: 
 * 
 *     --> Building 'fetchQuotesByPage' 
 *
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

export const fetchTopQuotesWithCancellation = (config = {}) =>
  api.get("top_quotes", config).then((res) => res.data.quotes);

export const postQuote = (quote) => api.post("", quote);
export const resetQuotes = () => api.post("reset", {});
export const fetchQuotesByPage = (page) =>
  api.get("", { params: { page } }).then((res) => res.data);

export const fetchQuotesByCursor = (cursor) =>
  api.get("", { params: { cursor } }).then((res) => res.data);