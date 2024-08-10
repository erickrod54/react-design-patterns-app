import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import styled from "styled-components";
import { fetchTopQuotesWithCancellation } from "../api/api.layer.index";
import { AuthorTextCancellation, CheckboxInput,
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

/**react-design-patterns-app - version 31.04 - QueryCancellationWithAbortSignal
 * - Features: 
 * 
 *     --> Building 'ButtonScrollCancellation' 
 * t
 * Note: pending to import and export the rest of the API's 
 */


const ButtonScrollCancellation = styled.button`
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