import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { IonButton, IonContent, IonIcon } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import "./SignGoogle.css"

const SignGoogle: React.FC = () => {
    function googleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);
            const user = result.user;
            if (result.user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: user.displayName
                });
                window.alert("User logged in Successfully");
                window.location.href = "/main";
            }
        });
    }

    return (
        <IonButton className="button-google-login ion-no-margin" onClick={(googleLogin)}><IonIcon icon={logoGoogle} className="google-logo" />Google</IonButton>
    );
}

export default SignGoogle; 