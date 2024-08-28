import React, { useState } from "react";
import { useImmer } from "use-immer";
import { usePatternsAppContext } from "../context";
import styled from "styled-components";
import { BoardTitleTaskBoard, ColumnContainerTaskBoard, ContainerTasksBoard, ContentTaskBoard, HeaderBackgroundTaskBoard, HeaderTaskBoard } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 34.03 - TasksBoard
 * - Features: 
 * 
 *     --> Migrating 'ColumnContainerTaskBoard'
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/



const ColumnHeader = styled.h3`
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: aliceblue;
`;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 70vh;
`;

const TaskButton = styled.button`
  border: 1px solid #e2e8f0;
  min-width: 200px;
  height: 50px;
  width: 100%;
  background-color: ${({ isSelected }) => (isSelected ? "#34d399" : "#fff")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: #e2e8f0;
  }
`;

const UpdateTaskHeader = styled.h2`
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const UpdateTaskInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #466997;
  color: #000;
`;

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
                <ColumnHeader>{column.name}</ColumnHeader>
                <TaskContainer>
                  {column.tasks.map((task, taskIdx) => (
                    <TaskButton
                      key={taskIdx}
                      isSelected={
                        columnIdx === selectedTask?.columnIdx &&
                        taskIdx === selectedTask?.taskIdx
                      }
                      onClick={() => onSelectTask(columnIdx, taskIdx)}
                    >
                      <h4>{task.name}</h4>
                    </TaskButton>
                  ))}
                </TaskContainer>
              </ColumnContainerTaskBoard>
            ))}
            <div>
              <UpdateTaskHeader>
                {selectedTask ? "Update task" : "Select a task to update"}
              </UpdateTaskHeader>
              {selectedTask ? (
                <UpdateTaskInput
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