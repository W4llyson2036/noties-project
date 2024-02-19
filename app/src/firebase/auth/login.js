import { auth } from "../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function doLogin(email, password, setIsLoggedIn, setLoginError) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        if (userCredential.user) {
            setIsLoggedIn(true);
        };
    
    } catch (error) {
        setLoginError(true);
        setTimeout(() => setLoginError(false), 3000);
    };
};