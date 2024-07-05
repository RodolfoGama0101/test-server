import {
    IonPage,
    IonHeader,
    IonContent,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonText,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonCardTitle,
    IonCardSubtitle
} from "@ionic/react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState } from "react";


const Users: React.FC = () => {
    interface UserData {
        id: number;
        firstName?: string; // Make firstName optional if it might not exist in some documents
        email: string;
    }

    const [usuarios, setUsuarios] = useState(Array);

    async function imprimirDados() {


        const querySnapshot = await getDocs(collection(db, "Users"));

        const usuariosData = querySnapshot.docs.map((doc) => {
            const docId = doc.id;
            const docData = doc.data();

            // Combine docId and docData into a single object
            const combinedData = {
                id: docId, // Add docId as a property
                ...docData, // Spread docData to include its existing properties
            };

            return combinedData;
        });

        setUsuarios(usuariosData);
        console.log(usuarios);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/main"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Usuários</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonButton onClick={imprimirDados} className="ion-margin">Imprimir usuários</IonButton>

                {usuarios.map(usuario => {
                    return (
                        // <IonItem key={usuario.id}>
                        //     <IonLabel>{usuario.value}</IonLabel>
                        // </IonItem>

                        <IonCard key={usuario.id}>
                            <IonCardContent>
                                <IonCardTitle>{usuario.firstName}</IonCardTitle>
                                <IonCardSubtitle>{usuario.email}</IonCardSubtitle>
                            </IonCardContent>
                        </IonCard>
                    )
                })}
            </IonContent>
        </IonPage>
    );
}

export default Users;