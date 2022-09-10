import { IonContent, IonHeader, IonPage, IonRow, IonCol, IonGrid } from '@ionic/react';
import Toolbar from "../components/toolbar/toolbar";
import MovieCard from '../components/moviecard/moviecard';
import './Home.css';
import peliculasJSON from '../assets/movies.json';


const Home: React.FC = () => {
  const peliculas = peliculasJSON.slice(0, 5);
  const listPeliculas = peliculas.map((pelicula) => {
    return <IonCol><MovieCard key={pelicula.id} pelicula={pelicula} /></IonCol>

  });
  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow className='ion-align-items-center'>
            {listPeliculas}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
