import { auth }               from "../firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";

export let UserId = null;

export function authState() {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            UserId = auth.currentUser.uid; 
            let json = JSON.stringify(UserId).split('"').join('');
            localStorage.setItem('id', json);
        } else {
            console.log("Nenhum usuário está autenticado.")
        }
    });
}