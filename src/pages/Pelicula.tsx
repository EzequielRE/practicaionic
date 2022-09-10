import { IonContent, IonHeader, IonPage } from '@ionic/react';
import Toolbar from "../components/toolbar/toolbar";
import { RouteComponentProps } from 'react-router-dom';
import './Pelicula.css';
interface UserDetailPageProps
  extends RouteComponentProps<{
    title: string;
  }> {}

const Pelicula: React.FC<UserDetailPageProps>  = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar/>
      </IonHeader>
      <IonContent>
        Película: {match.params.title}
      </IonContent>
    </IonPage>
  );
};

export default Pelicula;
