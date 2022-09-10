import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Toolbar from "../components/toolbar/toolbar";
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar/>
      </IonHeader>
      <IonContent>
        Página About
      </IonContent>
    </IonPage>
  );
};

export default About;
