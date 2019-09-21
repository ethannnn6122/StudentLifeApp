import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import './pageCSS/to_do.css';
import { Task } from '../models/task';
import { TasksList } from './Todo-Components/TasksList';

export interface FormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

interface State {
  newTask: Task;
  tasks: Task[];
}


class ToDoList extends Component<FormProps, State>  {
  state = {
    newTask: {
      id: 1,
      name: ""
    },
    tasks: []
  };
  render(){
    const { onChange, onAdd, task } = this.props;
    return(
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
           <TasksList tasks={this.state.tasks} onDelete={this.deleteTask} /> 
         </IonRow>
       </IonGrid>       
      </IonContent>
    </IonPage>
    );
  }

   private deleteTask = (taskToDelete: Task) => {
      this.setState(previousState => ({
        tasks: [
          ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
        ]
      }));
    };
  } 

export default ToDoList;
