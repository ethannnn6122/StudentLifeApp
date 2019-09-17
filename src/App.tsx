import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, journal, checkboxOutline } from 'ionicons/icons';
import homeTab from './pages/homeTab';
import agendaTab from './pages/agendaTab';
import ToDoList from './pages/to_doTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

class App extends Component {
  state = {
    items: [],
    currentItems: {text: '', key: '' },
  }
  handleInput = () => {
    console.log("Hello Input");
  }
  addItem = () => {
    console.log("Hello Add Item");
  }
  render() {
    return(
      <IonApp>
        {/* <ToDoList/> */}
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={agendaTab} exact={true} />
          <Route path="/tab2" component={homeTab} exact={true} />
          <Route path="/tab3" component={ToDoList} />
          <Route exact path="/" render={() => <Redirect to="/tab2" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={journal} />
            <IonLabel>Agenda</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={checkboxOutline} />
            <IonLabel>To-Do</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
    );
  }
}

export default App;