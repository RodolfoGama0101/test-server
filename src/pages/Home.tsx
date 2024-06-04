import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput, 
  IonButton
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Database Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonInput label="Email input" type="email" placeholder="email@domain.com" className='ion-padding'></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="Password input" type="password" value="password" className='ion-padding'></IonInput>
        </IonItem>
        <IonButton className='ion-margin'>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
