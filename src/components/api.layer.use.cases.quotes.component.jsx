import { useQuery } from "react-query";
import { fetchTopQuotes } from '../api/api.layer.index';
import { AuthorCite, 
         AuthorInfo, 
         AuthorName, 
         ErrorMessage,
         LoadingMessage,
         OutQuotContainer, QuoteBlock, QuotesContainer, QuoteText, TitleForQuote } from '../styledcomponents/styled.components.index'
import styled from "styled-components";

/**react-design-patterns-app - version 24.12 - FetchTopQuotes
 * - Features: 
 * 
 *     --> Migrating styles 'AuthorName'
'
 *
 * 
 * Note: pending to migrate styles 
*/


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