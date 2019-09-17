import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonInput, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import './to_do.css';
import App from '../App';


class ToDoList extends Component<App> {
  render(){
    return (
      <IonPage className="body">
        <IonHeader>
          <IonToolbar>
            <IonTitle>To-Do List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <form onSubmit={this.props.addItem}>
        <IonGrid>
           <IonRow>
            <IonCol size="auto">
              <IonItem>
              <IonLabel>Enter a Task:</IonLabel>
              <IonInput></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
            <IonButton type="submit">Add</IonButton>
            </IonCol>
           </IonRow>
         </IonGrid>       
        </form>
        </IonContent>
      </IonPage>
    );
  }
};

export default ToDoList;
