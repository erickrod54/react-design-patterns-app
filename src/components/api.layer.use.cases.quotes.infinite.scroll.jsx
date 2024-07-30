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
         HiddenMessage,
         LoadingMessageScroll,
         QuoteBlockScroll,
         QuotesContainerScroll,
         QuoteTextScroll,
         TitleScroll,
         ToggleTextScroll} from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 29.11 - InfiniteScrollQuotes
 * - Features: 
 * 
 *     --> Migrating 'HiddenMessage' style component
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/



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
