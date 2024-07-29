import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import { fetchQuotesByCursor } from "../api/api.layer.use.case.quotes.infinite.scroll";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AuthorTextScroll,
         ButtonScroll,
         CiteContainerScroll,
         ContainerScroll,
         ErrorMessageScroll,
         LoadingMessageScroll,
         QuoteBlockScroll, QuotesContainerScroll, QuoteTextScroll, TitleScroll, 
         ToggleTextScroll} from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 29.10 - InfiniteScrollQuotes
 * - Features: 
 * 
 *     --> Migrating 'ToggleTextScroll' style component
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/





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
      <ButtonScroll onClick={toggleDisplay}>
        <ToggleTextScroll display={display}>
            {display ? "Hide Component" : "Show Component"}
        </ToggleTextScroll>
      </ButtonScroll>
      {!display && <HiddenMessage>The component is hidden</HiddenMessage>}
      {display && (
        <ContainerScroll>
          <div>
            <TitleScroll>Infinite Scroll Quotes</TitleScroll>
            {isError && (
              <ErrorMessageScroll>
                There was a problem with fetching quotes
              </ErrorMessageScroll>
            )}
            {isLoading && (
              <LoadingMessageScroll>Fetching quotes</LoadingMessageScroll>
            )}
            {isSuccess && (
              <QuotesContainerScroll>
                <div>
                  {quotes?.pages.map((data) =>
                    data.quotes.map((quote) => (
                      <QuoteBlockScroll key={quote.id}>
                        <QuoteTextScroll>"{quote.quote}"</QuoteTextScroll>
                        <CiteContainerScroll>
                          <div>
                            <AuthorTextScroll>{quote.author}</AuthorTextScroll>
                          </div>
                        </CiteContainerScroll>
                      </QuoteBlockScroll>
                    ))
                  )}
                  <div ref={loadMoreRef}></div>
                </div>
                {isFetchingNextPage && <span>Loading...</span>}
              </QuotesContainerScroll>
            )}
          </div>
        </ContainerScroll>
      )}
    </>
  );
};
export default InfiniteScrollQuotes;
