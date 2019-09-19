import React from "react";

import { Task } from "../../models/task";
import { TaskListItem } from "../Todo-Components/TasksListItem";
import { IonList } from "@ionic/react";
import "./Todo.css";
import ReactDOM from "react-dom";

export interface TaskListProps {
    tasks: Task[];
    onDelete: (task: Task) => void;
}

export const TasksList: React.FC<TaskListProps> = ({tasks, onDelete }) => (

    <IonList>
        {tasks.map((task, i) => (
            <TaskListItem task={task} onDelete={onDelete} key={i}/>
        ))}    
    </IonList> 
);