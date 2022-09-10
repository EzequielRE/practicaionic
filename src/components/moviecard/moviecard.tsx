import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonButton, IonImg } from '@ionic/react';
interface ScanNewProps {
    pelicula: any;
}

const MovieCard: React.FC<ScanNewProps> = ({ pelicula }) => {
    const image = "https://image.tmdb.org/t/p/w220_and_h330_face/" + pelicula.poster_path;
    const path = "pelicula/"+pelicula.title;
    return (
        <IonCard>
            <IonImg src={image}/>
            <IonCardHeader>
                <IonCardTitle>{pelicula.original_title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonButton fill="outline" routerLink={path}>+ Info</IonButton>
            </IonCardContent>
        </IonCard>
    );
};

export default MovieCard;
