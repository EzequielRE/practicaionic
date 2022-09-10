import React from 'react';
import { IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import { NavButtons } from '../navbuttons/navbuttons';

const Toolbar: React.FC = () => {

    return (
        <IonToolbar>
          <IonTitle>Películas recientes</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
    );
};

export default Toolbar;