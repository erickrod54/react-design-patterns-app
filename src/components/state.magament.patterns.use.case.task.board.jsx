import React, { useState } from "react";
import { useImmer } from "use-immer";
import { usePatternsAppContext } from "../context";
import styled from "styled-components";

/**react-design-patterns-app - version 32.14 - TasksBoard
 * - Features: 
 * 
 *     --> Building 'onTaskNameChange'  handler
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

    const onTaskNameChange = (e) => {
        if (!selectedTask) return;
        const { columnIdx, taskIdx } = selectedTask;
    
          setBoard((board) => {
            return {
              ...board,
              columns: [
                ...board.columns.map((column, _columnIdx) => {
                  if (columnIdx !== _columnIdx) {
                    return column;
                  }
                  return {
                    ...column,
                    tasks: column.tasks.map((task, _taskIdx) => {
                      if (taskIdx !== _taskIdx) {
                        return task;
                      }
                      return {
                        ...task,
                        name: e.target.value,
                      };
                    }),
                  };
                }),
              ],
            };
          });
      };
  
      
    return (
      <></>
    );
  };
  export default TasksBoard;