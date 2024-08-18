import React, { useState } from "react";
import { useImmer } from "use-immer";
import { usePatternsAppContext } from "../context";
import styled from "styled-components";

/**react-design-patterns-app - version 32.13 - TasksBoard
 * - Features: 
 * 
 *     --> Building 'onSelectTask'  handler
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/


const TasksBoard = (props) => {
    
    const { boardData } = usePatternsAppContext();

    const [board, setBoard] = useState(boardData);
    const [selectedTask, setSelectedTask] = useState();
    
    const onSelectTask = (columnIdx, taskIdx) => {
        setSelectedTask({
          columnIdx,
          taskIdx,
        });
      };
  
    return (
      <></>
    );
  };
  export default TasksBoard;