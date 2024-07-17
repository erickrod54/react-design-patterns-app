import { useQuery } from "react-query";
import { fetchQuotesByPage } from "../api/api.layer.index"
import { useState } from "react";
import styled from "styled-components";
import { AuthorText, 
         CiteContainer,
         ContainerPaginated,
         ErrorMessagePagination,
         LoadingMessagePagination,
         NextPageButton,
         PageButton,
         PageNumber,
         QuoteBlockPagination,
         QuotesContainerPagination, QuoteTextPagination, TitlePaginated } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 27.20- api pagination
 * - Features: 
 * 
 *     --> Migrating 'NextPageButton
 *
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/



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
        <ContainerPaginated>
      <div>
        <TitlePaginated>Paginated Quotes</TitlePaginated>
        {isError ? (
          <ErrorMessagePagination>There was a problem with fetching quotes</ErrorMessagePagination>
        ) : null}
        {isLoading ? <LoadingMessagePagination>Fetching quotes</LoadingMessagePagination> : null}
        {isSuccess ? (
          <QuotesContainerPagination>
            <div>
              <div>
                {quotes?.quotes.map((quote) => (
                  <QuoteBlockPagination key={quote.id}>
                    <QuoteTextPagination>"{quote.quote}"</QuoteTextPagination>
                    <CiteContainer>
                      <div>
                        <AuthorText>{quote.author}</AuthorText>
                      </div>
                    </CiteContainer>
                  </QuoteBlockPagination>
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
          </QuotesContainerPagination>
        ) : null}
      </div>
    </ContainerPaginated>
    )

}

export default PaginatedQuotes;