import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import './pageCSS/to_do.css';
import { Task } from '../models/task';

export interface FormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

export const ToDoList: React.FC<FormProps> = ({
  onChange,
  onAdd,
  task
}) => (
  <IonPage className="body">
        <IonHeader>
          <IonToolbar>
            <IonTitle>To-Do List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent> 
          <IonGrid>
           <IonRow>
            <form onSubmit={onAdd}>
              <IonCol size="auto">
               <IonItem>
                <IonLabel>Enter a Task:</IonLabel>
                <input onChange={onChange} value={task.name}/>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonButton type="submit">Add</IonButton>
            </IonCol>
                </form>
           </IonRow>
           <IonRow>
             Put stuff here
           </IonRow>
         </IonGrid>       
        </IonContent>
      </IonPage>
)

export default ToDoList;
