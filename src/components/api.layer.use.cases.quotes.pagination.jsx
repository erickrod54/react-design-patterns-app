import { useQuery } from "react-query";
import { fetchQuotesByPage } from "../api/api.layer.index"
import { useState } from "react";
import styled from "styled-components";

/**react-design-patterns-app - version 27.06 - api pagination
 * - Features: 
 * 
 *     --> Refactoring 'Title'  styles
 *
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const Container = styled.div`
  padding: 8px;
  max-width: 2xl;
  margin: auto;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: darkorange;
  background-color: lavender;
  width: fit-content;
  border-radius: 1rem;
  padding: 8px;
  margin: 8px;
`;

const ErrorMessage = styled.p`
  color: #c53030;
`;

const LoadingMessage = styled.p``;

const QuotesContainer = styled.div``;

const QuoteBlock = styled.blockquote`
  position: relative;
  padding: 1rem;
  font-size: 1.5rem;
  font-style: italic;
  border-left: 4px solid #718096;
  background-color: #f7fafc;
  color: #4a5568;
  margin-bottom: 1rem;
`;

const QuoteText = styled.p`
  margin-bottom: 1rem;
`;

const CiteContainer = styled.cite`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthorText = styled.span`
  margin-bottom: 1px;
  font-size: 0.875rem;
  font-style: italic;
  font-weight: bold;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.isLoading ? "#CBD5E0" : "#4299E1")};
  color: ${(props) => (props.isLoading ? "#A0AEC0" : "#fff")};
  padding: 12px 16px;
  border: none;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
  min-width: 100px;
`;

const PageNumber = styled.span`
  font-size: 1.125rem;
  font-style: italic;
  padding-left: 15px;
  padding-right: 15px;
`;

const NextPageButton = styled.button`
  background-color: ${(props) => (props.isLoading ? "#CBD5E0" : "#4299E1")};
  color: ${(props) => (props.isLoading ? "#A0AEC0" : "#fff")};
  padding: 12px 16px;
  border: none;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
  min-width: 100px;
`;

const LoadingSpan = styled.span`
  padding-left: 25px;
  color: orange;
`;

const PaginatedQuotes = () => {
    const [page, setPage] = useState(1);
    const {
      data: quotes,
      isLoading,
      isFetching,
      isSuccess,
      isError,
      isPreviousData,
    } = useQuery(["quotes", page], () => fetchQuotesByPage(page), {
      keepPreviousData: true,
    });

    return(
        <Container>
      <div>
        <Title>Paginated Quotes</Title>
        {isError ? (
          <ErrorMessage>There was a problem with fetching quotes</ErrorMessage>
        ) : null}
        {isLoading ? <LoadingMessage>Fetching quotes</LoadingMessage> : null}
        {isSuccess ? (
          <QuotesContainer>
            <div>
              <div>
                {quotes?.quotes.map((quote) => (
                  <QuoteBlock key={quote.id}>
                    <QuoteText>"{quote.quote}"</QuoteText>
                    <CiteContainer>
                      <div>
                        <AuthorText>{quote.author}</AuthorText>
                      </div>
                    </CiteContainer>
                  </QuoteBlock>
                ))}
              </div>
              <div>
                {isFetching ? <LoadingSpan>Loading...</LoadingSpan> : null}{" "}
                <div>
                  <PageButton
                    onClick={() => setPage((old) => Math.max(old - 1, 0))}
                    disabled={page === 1}
                  >
                    Previous
                  </PageButton>{" "}
                  <PageNumber>{page}</PageNumber>
                  <NextPageButton
                    onClick={() => {
                      if (!isPreviousData && quotes?.hasMore) {
                        setPage((old) => old + 1);
                      }
                    }}
                    disabled={isPreviousData || !quotes?.hasMore}
                  >
                    Next
                  </NextPageButton>
                </div>
              </div>
            </div>
          </QuotesContainer>
        ) : null}
      </div>
    </Container>
    )

}

export default PaginatedQuotes;