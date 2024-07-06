import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import styled from "styled-components";
import { postQuote, resetQuotes } from "../api/api.layer.index";
import { ButtonPostForm, ContainerPostForm, FormGroup, FormPost, InputPost, Label, TitlePostForm } from "../styledcomponents/styled.components.index";

/**react-design-patterns-app - version 26.06- UpdateQuotesForm
 * - Features: 
 * 
 *     --> Migrating 'ButtonPostForm' styles 
 *
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/


const UpdateQuotesForm = () => {
  // Get access to the QueryClient instance
  const queryClient = useQueryClient();
  // Quotes mutations
  const createQuoteMutation = useMutation(postQuote);
  const resetQuotesMutation = useMutation((e) => resetQuotes());
  // Form state
  const [form, setForm] = useState({
    author: "",
    quote: "",
  });
  // Update the form state on change
  const onChange = (e) => {
    setForm((_form) => ({
      ..._form,
      [e.target.name]: e.target.value,
    }));
  };
  // Validate the form and start create quote mutation
  const onSubmit = async (e) => {
    e.preventDefault();
    const { author, quote } = form;
    if (!author || !quote) {
      alert("Please provide quote and author text.");
      return;
    }
    await createQuoteMutation.mutate(form, {
      onSuccess: () => {
        setForm({
          quote: "",
          author: "",
        });
        // Tell React-Query to refetch 'top-quotes' and 'quotes' queries
        queryClient.invalidateQueries("top-quotes");
        toast.success("Quote created");
      },
    });
  };
  // Reset the quotes to their original state on the server
  const onReset = (e) => {
    resetQuotesMutation.mutate(e, {
      onSuccess: () => {
        queryClient.invalidateQueries("top-quotes");
        toast.success("Quote resetted.");
      },
    });
  };
  return (
    <ContainerPostForm>
      <TitlePostForm>Create quote</TitlePostForm>
      <FormPost onSubmit={onSubmit}>
        <FormGroup>
          <Label>Author</Label>
          <InputPost
            type="text"
            name="author"
            value={form.author}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Quote</Label>
          <InputPost
            type="text"
            name="quote"
            value={form.quote}
            onChange={onChange}
          />
        </FormGroup>
        <div style={{ textAlign: "center" }}>
          <ButtonPostForm
            type="submit"
            isLoading={createQuoteMutation.isLoading}
            disabled={createQuoteMutation.isLoading}
          >
            {createQuoteMutation.isLoading
              ? "Creating quote..."
              : "Create quote"}
          </ButtonPostForm>
          <ButtonPostForm
            type="button"
            onClick={onReset}
            isLoading={resetQuotesMutation.isLoading}
            disabled={resetQuotesMutation.isLoading}
          >
            {resetQuotesMutation.isLoading ? "Resetting..." : "Reset quotes"}
          </ButtonPostForm>
        </div>
      </FormPost>
    </ContainerPostForm>
  );
};
export default UpdateQuotesForm;