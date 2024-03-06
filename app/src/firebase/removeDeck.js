import { db } from "./firebaseConfig";
import { auth } from "./firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";

export async function removeDeck(removeDeckId) {
    try {
        const docRef = doc(db, `user - ${auth.currentUser.uid}`, removeDeckId);

        await deleteDoc(docRef);
    } catch (error) {
        console.log(error);
    }
}