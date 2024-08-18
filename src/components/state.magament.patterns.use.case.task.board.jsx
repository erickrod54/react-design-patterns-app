import React, { useState } from "react";
import { useImmer } from "use-immer";
import { usePatternsAppContext } from "../context";
import styled from "styled-components";

/**react-design-patterns-app - version 32.12 - TasksBoard
 * - Features: 
 * 
 *     --> Destructuring boardData from the context
 * 
 *     --> Building states tfor selectTask 
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/


const TasksBoard = (props) => {
    
    const { boardData } = usePatternsAppContext();

    const [board, setBoard] = useState(boardData);
    const [selectedTask, setSelectedTask] = useState();
    
    
  
    return (
      <></>
    );
  };
  export default TasksBoard;