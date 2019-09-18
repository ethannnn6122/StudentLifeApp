import React from "react";

import { Task } from "../../models/task";
import { TaskListItem } from "../Todo-Components/TasksListItem";

export interface TaskListProps {
    tasks: Task[];
    onDelete: (task: Task) => void;
}

export const TasksList: React.FC<TaskListProps> = ({tasks, onDelete }) => (
    <ul>
        {tasks.map(task => (
            <TaskListItem task={task} onDelete={onDelete} />
        ))}
    </ul>
);