import styled from "styled-components";
import { searchMeals } from "../api/api.layer.index";
import React, { useMemo, useState } from "react";
import { debounce } from "../utils/debouncing";

/**react-design-patterns-app - version 50.04 - SearchDebounce
 * - Features: 
 * 
 *     --> writting  'SearchDebounce '  styles
 *
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

  const SearchContainer = styled.div`
    width: 50%;
    margin: 50px auto;
    padding: 20px;
    background-color: #222; /* Dark gray for contrast */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    text-align: center;
  `

const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const SearchLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #ffcc00; /* Bright yellow for contrast */
`
const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ffcc00; /* Bright yellow border */
  border-radius: 5px;
  background-color: #333; /* Dark gray */
  color: white;
  outline: none;

  .search-input::placeholder {
  color: #bbb;
  }
`

const SearchResults = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`

const SearchItem = styled.li`
padding: 10px;
margin: 5px 0;
background-color: #444; /* Slightly lighter gray */
border-radius: 5px;
transition: background 0.3s;
cursor: pointer;
`

  
