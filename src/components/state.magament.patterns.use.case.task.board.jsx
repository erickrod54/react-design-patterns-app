import React, { useState } from "react";
import { useImmer } from "use-immer";
import { usePatternsAppContext } from "../context";
import styled from "styled-components";

/**react-design-patterns-app - version 33.02 - TasksBoard
 * - Features: 
 * 
 *     --> Refactoring 'UpdateTaskInput'
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/

const Container = styled.div`
  padding: 2rem 0;
  max-width: 4xl;
  margin: auto;
`;

const Header = styled.div`
  text-align: left;
`;

const HeaderBackground = styled.div`
  background-color: #348bd3;
  padding: 1rem 4px 4px 4px;
  font-size: x-large;
`;

const BoardTitle = styled.h2`
  font-weight: bold;
  color: #080707;
`;

const Content = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-left: 25px;
  background-color: #3b3d97;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
`;

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
        <Container>
        <Header>
          <HeaderBackground>
            <BoardTitle>{board.name}</BoardTitle>
          </HeaderBackground>
          <Content>
            {board.columns.map((column, columnIdx) => (
              <ColumnContainer key={columnIdx}>
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
              </ColumnContainer>
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
          </Content>
        </Header>
      </Container>
    );
  };
  export default TasksBoard;