import { fetchTopQuotes } from './api.layer.quotes.request';
import { fetchTopQuotesWithCancellation } from './api.layer.use.case.quotes.cancellation.query';
import { fetchQuotesByCursor } from './api.layer.use.case.quotes.infinite.scroll';
import { fetchQuotesByPage } from './api.layer.use.case.quotes.pagination';
import { postQuote, resetQuotes } from './api.layer.use.case.quotes.post.update';


/**react-design-patterns-app - version 30.08 - Api Layer index
 * - Features: 
 * 
 *     --> Importing and exporting 'fetchTopQuotesWithCancellation'
 * 
 * Note: pending to import and export the rest of the API's 
 */

export {  fetchTopQuotes,
          postQuote,
          resetQuotes,
          fetchQuotesByPage,
          fetchQuotesByCursor,
          fetchTopQuotesWithCancellation }