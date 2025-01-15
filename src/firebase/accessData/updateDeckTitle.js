// Firebase
import { db }                   from "../firebaseConfig";
import { doc, updateDoc }       from "firebase/firestore";

export async function updateDeckTitle(value, cardID) {
    try {
        // Referência ao documento específico
        const userId = localStorage.getItem('id');
        if (!userId) {
            throw new Error("Usuário não autenticado. ID ausente no localStorage.");
        }

        // Referência ao documento no Firestore
        const docRef = doc(db, `user - ${userId}`, cardID);

        // Atualizar o campo "deckName"
        await updateDoc(docRef, {
            deckName: value,
        });
            
    } catch (error) {
        console.error("updateDeckTitle(); Erro ao atualizar o título do deck: ", error);
    }
}