import { auth } from "../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

import { authState } from "./authUseState.js";
export let currentUserId = null;

export async function doLogin(email, password, setIsLoggedIn, setLoginError) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        if (userCredential.user) {
            setIsLoggedIn(true);
        }
        authState();
    } catch (error) {
        setLoginError(true);
        setTimeout(() => setLoginError(false), 3000);
    };
};