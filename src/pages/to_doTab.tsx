import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonInput, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import './to_do.css';
import App from '../App';



class ToDoList extends Component<App> {
  
  constructor(props: any){
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    

  }

  render(){
    return (
      <IonPage className="body">
        <IonHeader>
          <IonToolbar>
            <IonTitle>To-Do List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <form onSubmit={this.addItem}>
        <IonGrid>
           <IonRow>
            <IonCol size="auto">
              <IonItem>
              <IonLabel>Enter a Task:</IonLabel>
              {/* <IonInput ref= { (a) => this.textInput = a}></IonInput> */}
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
