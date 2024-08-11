import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import styled from "styled-components";
import { fetchTopQuotesWithCancellation } from "../api/api.layer.index";
import { AuthorTextCancellation, ButtonScrollCancellation, CheckboxInput,
         CheckboxLabel,
         CiteContainerCancellation,
         ContainerCancellation,
         ErrorMessageCancellation,
         FetchButton,
         HiddenMessage,
         LoadingMessageCancellation,
         QuoteBlockCancellation,
         QuotesContainerCancellation, QuoteTexCancellation, TitleCancellation, 
         ToggleTextScrollCancellation} from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 31.06 - QueryCancellationWithAbortSignal
 * - Features: 
 * 
 *     --> Building 'toggleDisplay' 
 * t
 * Note: pending to import and export the rest of the API's 
 */

const QueryCancellationWithAbortSignal = () => {
  const [shouldAbort, setShouldAbort] = useState(true);
  const queryClient = useQueryClient();
  const [display, setDisplay] = useState(false);
  
  const {
    data: quotes,
    isSuccess,
    isLoading,
    isError,
  } = useQuery(
    "top-aborted-quotes-abort-controller",
    ({ signal }) => {
      return fetchTopQuotesWithCancellation({
        signal,
      }).catch((error) => {
        if (error.aborted) {
          toast.error("Request aborted");
          return;
        }
        throw error;
      });
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  const toggleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  const onFetchQuotes = () => {
    queryClient.refetchQueries("top-aborted-quotes-abort-controller");
    setTimeout(() => {
      shouldAbort &&
        queryClient.cancelQueries("top-aborted-quotes-abort-controller");
    }, 200);
  };
  return (
    <ContainerCancellation>
      <div>
        <TitleCancellation>Query Cancellation With Abort Controller</TitleCancellation>
        <div>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={shouldAbort}
              onChange={() => setShouldAbort((checked) => !checked)}
            />
            Abort
          </CheckboxLabel>
        </div>
        {isError ? (
          <ErrorMessageCancellation>There was a problem with fetching quotes</ErrorMessageCancellation>
        ) : null}
        <div>
          <FetchButton onClick={onFetchQuotes}>Fetch quotes</FetchButton>
        </div>
        {isLoading ? <LoadingMessageCancellation>Fetching quotes</LoadingMessageCancellation> : null}
        {isSuccess ? (
          <QuotesContainerCancellation>
            {quotes?.map((quote) => (
              <QuoteBlockCancellation key={quote.id}>
                <QuoteTexCancellation>"{quote.quote}"</QuoteTexCancellation>
                <CiteContainerCancellation>
                  <div>
                    <AuthorTextCancellation>{quote.author}</AuthorTextCancellation>
                  </div>
                </CiteContainerCancellation>
              </QuoteBlockCancellation>
            ))}
          </QuotesContainerCancellation>
        ) : null}
      </div>
    </ContainerCancellation>
  );
};

export default QueryCancellationWithAbortSignal;