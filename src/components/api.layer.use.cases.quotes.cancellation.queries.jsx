import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import styled from "styled-components";
import { fetchTopQuotesWithCancellation } from "../api/api.layer.index";
import { ContainerCancellation, TitleCancellation } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 30.10 - QueryCancellationWithAbortSignal
 * - Features: 
 * 
 *     --> Migrating 'TitleCancellation'
 * 
 * Note: pending to import and export the rest of the API's 
 */



const CheckboxLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const CheckboxInput = styled.input`
  margin-right: 0.75rem;
`;

const FetchButton = styled.button`
  background-color: #4299e1;
  color: #fff;
  padding: 0.75rem 1rem;
`;

const ErrorMessage = styled.p`
  color: #c53030;
`;

const LoadingMessage = styled.p``;

const QuotesContainer = styled.div`
  max-height: 24rem;
  overflow-y: auto;
  border-top: 1px solid #cbd5e0;
`;

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

const QueryCancellationWithAbortSignal = () => {
  const [shouldAbort, setShouldAbort] = useState(true);
  const queryClient = useQueryClient();
  
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
          <ErrorMessage>There was a problem with fetching quotes</ErrorMessage>
        ) : null}
        <div>
          <FetchButton onClick={onFetchQuotes}>Fetch quotes</FetchButton>
        </div>
        {isLoading ? <LoadingMessage>Fetching quotes</LoadingMessage> : null}
        {isSuccess ? (
          <QuotesContainer>
            {quotes?.map((quote) => (
              <QuoteBlock key={quote.id}>
                <QuoteText>"{quote.quote}"</QuoteText>
                <CiteContainer>
                  <div>
                    <AuthorText>{quote.author}</AuthorText>
                  </div>
                </CiteContainer>
              </QuoteBlock>
            ))}
          </QuotesContainer>
        ) : null}
      </div>
    </ContainerCancellation>
  );
};

export default QueryCancellationWithAbortSignal;