import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonButton
} from '@ionic/react';
import { getAuth, signOut } from "firebase/auth";

const Main: React.FC = () => {
  function logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location.href = "/"
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + " - " + errorMessage)
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Página Principal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText>
          <h1 className='ion-margin'>Seja bem-vindo à página principal!</h1>
        </IonText>

        <IonButton className='ion-margin' onClick={(logout)}>Logout</IonButton>
        <IonButton href='/users'>Página de usuários</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Main;
