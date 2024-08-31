import React, { useState } from "react";
import { useImmer } from "use-immer";
import { usePatternsAppContext } from "../context";
import styled from "styled-components";
import { BoardTitleTaskBoard,
         ColumnContainerTaskBoard,
         ColumnHeaderTaskBoard,
         ContainerTasksBoard,
         ContentTaskBoard,
         HeaderBackgroundTaskBoard, HeaderTaskBoard, 
         TaskButtonBoard, 
         TaskContainerBoard,
         UpdateTaskHeaderBoard,
         UpdateTaskInputBoard} from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 34.08 - TasksBoard
 * - Features: 
 * 
 *     --> Migrating 'UpdateTaskInputBoard'
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
        <ContainerTasksBoard>
        <HeaderTaskBoard>
          <HeaderBackgroundTaskBoard>
            <BoardTitleTaskBoard>{board.name}</BoardTitleTaskBoard>
          </HeaderBackgroundTaskBoard>
          <ContentTaskBoard>
            {board.columns.map((column, columnIdx) => (
              <ColumnContainerTaskBoard key={columnIdx}>
                <ColumnHeaderTaskBoard>{column.name}</ColumnHeaderTaskBoard>
                <TaskContainerBoard>
                  {column.tasks.map((task, taskIdx) => (
                    <TaskButtonBoard
                      key={taskIdx}
                      isSelected={
                        columnIdx === selectedTask?.columnIdx &&
                        taskIdx === selectedTask?.taskIdx
                      }
                      onClick={() => onSelectTask(columnIdx, taskIdx)}
                    >
                      <h4>{task.name}</h4>
                    </TaskButtonBoard>
                  ))}
                </TaskContainerBoard>
              </ColumnContainerTaskBoard>
            ))}
            <div>
              <UpdateTaskHeaderBoard>
                {selectedTask ? "Update task" : "Select a task to update"}
              </UpdateTaskHeaderBoard>
              {selectedTask ? (
                <UpdateTaskInputBoard
                  type="text"
                  value={
                    board.columns[selectedTask.columnIdx].tasks[
                      selectedTask.taskIdx
                    ].name
                  }
                  onChange={onTaskNameChange}
                />
              ) : null}
            </div>
          </ContentTaskBoard>
        </HeaderTaskBoard>
      </ContainerTasksBoard>
    );
  };
  export default TasksBoard;