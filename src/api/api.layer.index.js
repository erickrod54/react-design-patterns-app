import { fetchTopQuotes } from './api.layer.quotes.request';
import { fetchQuotesByPage } from './api.layer.use.case.quotes.pagination';
import { postQuote, resetQuotes } from './api.layer.use.case.quotes.post.update';


/**react-design-patterns-app - version 27.05 - Api Layer index
 * - Features: 
 * 
 *     --> Importing and exporting 'fetchQuotesByPage'
 * 
 * Note: pending to import and export the rest of the API's 
 */

export {  fetchTopQuotes, postQuote, resetQuotes, fetchQuotesByPage }