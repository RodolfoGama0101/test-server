import {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonText
} from "@ionic/react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Cadastro: React.FC = () => {
    var [nome, setNome] = useState("");
    var [email, setEmail] = useState("");
    var [senha, setSenha] = useState("");

    function fazerCadastro() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                window.location.href = "./Main";
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
                    <IonInput label="Nome: " type="text" placeholder="Rodolfo Gama" clearInput className='ion-padding' onIonChange={(e: any) => setNome(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="Email: " type="email" placeholder="email@domain.com" clearInput className='ion-padding' required onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="Senha: " type="password" placeholder="ds#an12e&sa" clearInput className='ion-padding' required onIonChange={(e: any) => setSenha(e.target.value)}></IonInput>
                </IonItem>
                <IonButton className='ion-margin' onClick={(fazerCadastro)}>Cadastrar</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default Cadastro;