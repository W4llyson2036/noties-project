import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function createAccount(email, password, setCreateAccountMessage) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        setCreateAccountMessage(old => ({...old, success: true}));
    } catch (error) {
        let errorMessage = '';

        if (error.code === "auth/weak-password") {
            errorMessage = 'weak password';
        } else if (error.code === "auth/email-already-in-use") {
            errorMessage = 'email already in use';
        } else {
            errorMessage = 'fill out the blank';
        }
        
        setCreateAccountMessage({error: true, message: errorMessage});
    }

    setTimeout(() => setCreateAccountMessage(
        {error: false, success: false, message: ''})
    , 3000);
}