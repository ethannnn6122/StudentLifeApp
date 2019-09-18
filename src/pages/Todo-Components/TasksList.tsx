import React from "react";

import { Task } from "../../models/task";
import { TaskListItem } from "../Todo-Components/TasksListItem";
import { IonList, IonPage } from "@ionic/react";

export interface TaskListProps {
    tasks: Task[];
    onDelete: (task: Task) => void;
}

export const TasksList: React.FC<TaskListProps> = ({tasks, onDelete }) => (
<IonPage className="body">
    <IonList>
        {tasks.map((task, i) => (
            <TaskListItem task={task} onDelete={onDelete} key={i}/>
        ))}
    </IonList>
</IonPage>
    
);