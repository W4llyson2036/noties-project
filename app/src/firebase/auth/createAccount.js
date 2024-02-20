import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function createAccount(email, password, setCreateAccountMessage) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        setCreateAccountMessage(old => ({...old, success: true}));
    } catch (error) {
        let errorMessage = '';

        switch(error.code) {
            case "auth/weak-password":
                errorMessage = 'weak password';
                break;
            case "auth/email-already-in-use":
                errorMessage = 'email already in use';
                break;
            default:
                errorMessage = 'fill out the blanck';
                break;
        }

        setCreateAccountMessage({error: true, message: errorMessage});
    }

    setTimeout(() => setCreateAccountMessage(
        {error: false, success: false, message: ''})
    , 3000);
}