import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonIcon
} from '@ionic/react';
import './Main.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useState } from 'react';
import { logoGoogle } from 'ionicons/icons';
import SignGoogle from '../components/SignGoogle';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {
    var usuario = null;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in 
        usuario = userCredential.user;
        window.location.href = "./Main";
        console.log("Login feito com sucesso!")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " - " + errorMessage)
        alert(errorMessage)
      });
  }

  // Login com conta Google
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.languageCode = 'it';

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(result.user);
        window.location.href = "./Main";

      }).catch((error) => {
        alert(error);
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Database Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonInput label="Email: " type="email" placeholder="email@domain.com" clearInput className='ion-padding' required onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="Password: " type="password" placeholder="ds#an12e&sa" clearInput className='ion-padding' required onIonChange={(e: any) => setSenha(e.target.value)}></IonInput>
        </IonItem>
        <IonButton className='button-login ion-margin' onClick={(fazerLogin)}>Login</IonButton>
        <SignGoogle></SignGoogle>
        <IonText className='texto-fazer-cadastro'>
          <a href="/Cadastro">Ainda não tenho conta. Fazer cadastro</a>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Login;
