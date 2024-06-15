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
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.languageCode = 'it';

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(result.user);
        window.location.href = "./Main";

      }).catch((error) => {
        alert(error);
      });
    signInWithRedirect(auth, provider);
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
        <IonButton className='button-login' onClick={(fazerLogin)}>Login</IonButton>
        <IonButton className="button-google-login" onClick={(signInWithGoogle)}><IonIcon icon={logoGoogle} className="google-logo" />Google</IonButton>
        <IonText className='texto-fazer-cadastro'>
          <a href="/Cadastro">Ainda não tenho conta. Fazer cadastro</a>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Login;
