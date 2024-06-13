import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton, 
  IonText
} from '@ionic/react';
import './Home.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

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
        <IonButton className='ion-margin' onClick={(fazerLogin)}>Login</IonButton>
        <IonText>
          <a href="/Cadastro">Fazer cadastro</a>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Login;
