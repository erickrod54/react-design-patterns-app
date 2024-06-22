import { useQuery } from "react-query";
import { fetchTopQuotes } from '../api/api.layer.index';
import { ErrorMessage,
         LoadingMessage,
         OutQuotContainer, QuoteBlock, QuotesContainer, TitleForQuote } from '../styledcomponents/styled.components.index'
import styled from "styled-components";

/**react-design-patterns-app - version 24.08 - FetchTopQuotes
 * - Features: 
 * 
 *     --> Migrating styles 'QuoteBlock
'
 *
 * 
 * Note: pending to migrate styles 
*/

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