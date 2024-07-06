import {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonText,
    IonIcon
} from "@ionic/react";
import { useState } from "react";
import { logoGoogle } from "ionicons/icons";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailLink } from "firebase/auth";
import "./Cadastro.css";
import { auth, db } from "../firebase/firebase";
import { doc,  setDoc } from "firebase/firestore";
import SignGoogle from "../components/SignGoogle";

const Cadastro: React.FC = () => {
    var [nome, setNome] = useState("");
    var [email, setEmail] = useState("");
    var [senha, setSenha] = useState("");

    // Cadastro com email e senha
    const cadastro = async (e: any) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, senha)
            .then(async () => {
                // Signed in 
                const user = auth.currentUser;
                console.log(user);
                if (user) {
                    await setDoc(doc(db, "Users", user.uid), {
                        email: user.email,
                        firstName: nome
                    });
                }

                window.alert("User Registered Successfully!!");
                
                window.location.href = "./Login";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                window.alert(errorMessage);
            })

    };

    // Login com conta Google
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                window.location.href = "./Main";

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(error);
                window.alert(errorMessage);
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
                    <IonInput label="Nome: " type="text" placeholder="Rodolfo Gama" clearInput className='ion-padding' onIonChange={(e: any) => setNome(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="Email: " type="email" placeholder="email@domain.com" clearInput className='ion-padding' required onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="Senha: " type="password" placeholder="ds#an12e&sa" clearInput className='ion-padding' required onIonChange={(e: any) => setSenha(e.target.value)}></IonInput>
                </IonItem>
                <IonButton className='ion-margin' onClick={(cadastro)}>Cadastrar</IonButton>
                <SignGoogle></SignGoogle>
                <IonText className='texto-fazer-cadastro'>
                    <a href="/Login">Já tenho conta. Fazer login</a>
                </IonText>
            </IonContent>
        </IonPage>
    );
}

export default Cadastro;