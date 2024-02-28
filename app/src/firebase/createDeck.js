import { db, auth } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

export async function createDeck(deckName) {
    try {
        const primaryColRef = collection(db, `user - ${auth.currentUser.uid}`);
        const docRef = await addDoc(primaryColRef, { deckName });
    } catch (error) {
        console.error("Erro ao criar baralho:", error);
    }
}
