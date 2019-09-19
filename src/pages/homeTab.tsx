import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';
import { person, arrowDropright } from 'ionicons/icons';
import React, { Component } from 'react';
import './pageCSS/home.css';

class homeTab extends Component{
  render(){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
            <IonIcon className="profile" slot="end" color="dark" icon={person} />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard className="Todo-card">
            <IonCardHeader>
              <IonCardTitle>To-Do:</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <ul>
                <li>Lorem ipsum, dolor sit amet consectetur</li>
                <li>Lorem ipsum, dolor sit amet consectetur</li>
                <li>Lorem ipsum, dolor sit amet consectetur</li>
                <li>Lorem ipsum, dolor sit amet consectetur</li>
                <li>Lorem ipsum, dolor sit amet consectetur</li>
              </ul>
              <IonButton>Show More</IonButton>
            </IonCardContent>
          </IonCard>
  
          <IonCard className="Due-card">
            <IonCardHeader>
              <IonCardTitle>Due Today:</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <ul>
                <li>Lorem ipsum, dolor sit amet consectetur</li>
                <li>Lorem ipsum, dolor sit amet consectetur</li>
                <li>Lorem ipsum, dolor sit amet consectetur</li>
                <li>Lorem ipsum, dolor sit amet consectetur</li>
                <li>Lorem ipsum, dolor sit amet consectetur</li>
              </ul>
              <IonButton>Show More</IonButton>
            </IonCardContent>
          </IonCard>
  
          <IonList lines="full">
            <IonListHeader>
              <IonTitle>Class Schedule</IonTitle>
            </IonListHeader>
            <IonItem href="" >
              <IonIcon slot="start" color="medium" icon={arrowDropright} />
              <IonLabel>Class 1</IonLabel>
            </IonItem>
            <IonItem href="" >
              <IonIcon slot="start" color="medium" icon={arrowDropright} />
              <IonLabel>Class 2</IonLabel>
            </IonItem>
            <IonItem href="" >
              <IonIcon slot="start" color="medium" icon={arrowDropright} />
              <IonLabel>Class 3</IonLabel>
            </IonItem>
            <IonItem href="" >
              <IonIcon slot="start" color="medium" icon={arrowDropright} />
              <IonLabel>Class 4</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  }
 
};

export default homeTab;
