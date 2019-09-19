import React from "react";

import { Task } from "../../models/task";
import { IonItem } from "@ionic/react";

export interface TasksListItemProps {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: React.FC<TasksListItemProps> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <IonItem>
      {task.name} <button onClick={onClick}>X</button>
    </IonItem>
  );
};