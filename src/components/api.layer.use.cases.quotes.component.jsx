import { useQuery } from "react-query";
import { fetchTopQuotes } from '../api/api.layer.index';
import { ErrorMessage, OutQuotContainer, TitleForQuote } from '../styledcomponents/styled.components.index'
import styled from "styled-components";

/**react-design-patterns-app - version 24.05 - FetchTopQuotes
 * - Features: 
 * 
 *     --> Migrating styles 'ErrorMessage'
 *
 * 
 * Note: pending to migrate styles 
*/


const LoadingMessage = styled.p``;

const QuotesContainer = styled.div`
  max-height: 96;
  overflow-y: auto;
  border-spacing: 1px;
`;

const QuoteBlock = styled.blockquote`
  position: relative;
  padding: 4px;
  font-size: xl;
  font-style: italic;
  border-left: 4px solid #d1d5db; /* Tailwind: border-neutral-500 */
  background-color: #f3f4f6; /* Tailwind: bg-neutral-100 */
  color: #6b7280; /* Tailwind: text-neutral-600 */

  &:not(:last-child) {
    border-bottom: 1px solid #d1d5db; /* Tailwind: divide-y */
  }
`;

const QuoteText = styled.p`
  margin-bottom: 4px;
`;

const AuthorCite = styled.cite`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AuthorName = styled.span`
  margin-bottom: 1px;
  font-size: sm;
  font-style: italic;
  font-weight: bold;
`;

const FetchTopQuotes = () => {

    const {data: quotes,
           isLoading,
           isSuccess,
           isError } = useQuery("top-quotes", fetchTopQuotes)

    return(
        <OutQuotContainer>
        <div>
          <TitleForQuote>Top Quotes</TitleForQuote>
          {isError ? (
            <ErrorMessage>There was a problem with fetching quotes</ErrorMessage>
          ) : null}
          {isLoading ? <LoadingMessage>Fetching quotes</LoadingMessage> : null}
          {isSuccess ? (
            <QuotesContainer>
              {quotes?.map((quote) => (
                <QuoteBlock key={quote.id} className="quote">
                  <QuoteText>"{quote.quote}"</QuoteText>
                  <AuthorCite>
                    <AuthorInfo>
                      <AuthorName>{quote.author}</AuthorName>
                    </AuthorInfo>
                  </AuthorCite>
                </QuoteBlock>
              ))}
            </QuotesContainer>
          ) : null}
        </div>
      </OutQuotContainer>
    )
}

export default FetchTopQuotes;