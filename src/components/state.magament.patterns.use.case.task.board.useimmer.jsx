import React, { useState } from "react";
import { useImmer } from "use-immer";
import { usePatternsAppContext } from "../context";
import styled from "styled-components";
import { BoardTitleImmer,
         ColumnContainerImmer,
         ColumnHeaderImmer,
         ContainerImmer,
         ContentImmer,
         HeaderBackgroundImmer, HeaderImmer, 
         TaskButtonImmer, 
         TaskContainerImmer} from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 34.18 - TasksBoardImmer
 * - Features: 
 * 
 *     --> Migrating 'TaskButtonImmer'
 * 
 * Note: 'UserInfo' with a few modifications ends up in 
 * 'UserInfoWithHook'  
*/


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

const TasksBoardImmer = (props) => {
    
    const { boardData } = usePatternsAppContext();

    const [board, setBoard] = useImmer(boardData);
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
          board.columns[columnIdx].tasks[taskIdx].name = e.target.value;
        });
    };
      
      
    return (
        <ContainerImmer>
            <HeaderImmer>
                <HeaderBackgroundImmer>
                <BoardTitleImmer>{board.name}</BoardTitleImmer>
                </HeaderBackgroundImmer>
                <ContentImmer>
                {board.columns.map((column, columnIdx) => (
                    <ColumnContainerImmer key={columnIdx}>
                    <ColumnHeaderImmer>{column.name}</ColumnHeaderImmer>
                    <TaskContainerImmer>
                        {column.tasks.map((task, taskIdx) => (
                        <TaskButtonImmer
                            key={taskIdx}
                            isSelected={
                            columnIdx === selectedTask?.columnIdx &&
                            taskIdx === selectedTask?.taskIdx
                            }
                            onClick={() => onSelectTask(columnIdx, taskIdx)}
                        >
                            <h4>{task.name}</h4>
                        </TaskButtonImmer>
                        ))}
                    </TaskContainerImmer>
                    </ColumnContainerImmer>
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
                </ContentImmer>
            </HeaderImmer>
        </ContainerImmer>
    );
  };
  export default TasksBoardImmer;