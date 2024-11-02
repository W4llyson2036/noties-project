import { db }                         from "./firebaseConfig";
import { auth }                       from "./firebaseConfig";
import { collection, deleteDoc, doc } from "firebase/firestore";

export async function removeDeck(removeDeckId) {
    try {
        const colRef = collection(db, `user - ${auth.currentUser.uid}`);
        const docRef = doc(colRef, removeDeckId);
        await deleteDoc(docRef);
    } catch (error) {
        throw new Error(`Erro ao tentar remover o deck ${removeDeckId}: ${error.message}`);
    }
}