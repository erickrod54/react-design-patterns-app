import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import { fetchQuotesByCursor } from "../api/api.layer.use.case.quotes.infinite.scroll";
import { useEffect, useState } from "react";
import styled from "styled-components";

/**react-design-patterns-app - version 28.16 - InfiniteScrollQuotes
 * - Features: 
 * 
 *     --> Building 'HiddenMessage' style Component
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const Container = styled.div`
  padding: 2rem 0;
  max-width: 2xl;
  margin: auto;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
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

const Button = styled.button`
  margin-bottom: 1px;
  font-size: 0.875rem; /* Tailored to a readable size */
  font-style: italic;
  font-weight: bold;
  width: fit-content;
  background-color: #4299e1; /* Blue color for contrast */
  color: #ffffff; /* White text for better visibility */
  border: none;
  border-radius: 0.375rem; /* Rounded corners */
  padding: 8px 12px; /* Comfortable padding */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2b6cb0; /* Darker blue on hover */
  }

  &:active {
    background-color: #2c5282; /* Even darker blue on active */
  }

  &:disabled {
    background-color: #cbd5e0; /* Disabled state */
    cursor: not-allowed;
    color: #a0aec0;
  }
`;

const ToggleText = styled.span`
  color: ${(props) => (props.display ? "#e53e3e" : "#38a169")}; /* Red for 'Hide', Green for 'Show' */
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const HiddenMessage = styled.h2`
  font-size: 1.5rem; /* Large, readable size */
  color: #718096; /* Neutral gray for a subtle message */
  text-align: center; /* Center the text */
  margin-top: 1rem; /* Add space above the message */
  background-color: #f7fafc; /* Light background for emphasis */
  padding: 0.5rem 1rem; /* Add padding for better readability */
  border-radius: 0.5rem; /* Rounded corners */
  border: 1px solid #e2e8f0; /* Light border for definition */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const InfiniteScrollQuotes = () => {
  const { ref: loadMoreRef, inView } = useInView();
  const [display, setDisplay] = useState(false);

  const {
    data: quotes,
    isLoading,
    isFetchingNextPage,
    isSuccess,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    "quotes",
    ({ pageParam = 0 }) => fetchQuotesByCursor(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.nextCursor;
      },
    }
  );
  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const toggleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <>
      <Button onClick={toggleDisplay}>
        <ToggleText display={display}>
            {display ? "Hide Component" : "Show Component"}
        </ToggleText>
      </Button>
      {display ? (
        <Container>
          <div>
            <Title>Infinite Scroll Quotes</Title>
            {isError && (
              <ErrorMessage>
                There was a problem with fetching quotes
              </ErrorMessage>
            )}
            {isLoading && (
              <LoadingMessage>Fetching quotes</LoadingMessage>
            )}
            {isSuccess && (
              <QuotesContainer>
                <div>
                  {quotes?.pages.map((data) =>
                    data.quotes.map((quote) => (
                      <QuoteBlock key={quote.id}>
                        <QuoteText>"{quote.quote}"</QuoteText>
                        <CiteContainer>
                          <div>
                            <AuthorText>{quote.author}</AuthorText>
                          </div>
                        </CiteContainer>
                      </QuoteBlock>
                    ))
                  )}
                  <div ref={loadMoreRef}></div>
                </div>
                {isFetchingNextPage && <span>Loading...</span>}
              </QuotesContainer>
            )}
          </div>
        </Container>
      ) : (
        <h2>The component is hidden</h2>
      )}
    </>
  );
};
export default InfiniteScrollQuotes;
