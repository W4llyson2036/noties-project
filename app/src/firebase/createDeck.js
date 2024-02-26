import { db, auth } from "./firebaseConfig.js";
import { collection, addDoc, doc } from "firebase/firestore";

export async function createDeck(deckName) {
    try {
        // Referência à coleção principal
        const primaryColRef = collection(db, `user - ${auth.currentUser.uid}`);

        const docRef = await addDoc(primaryColRef, { deckName }); // Documento vazio

        //cria sub deck
        // let subColDoc = await addDoc(collection(docRef, deckName), {});


        console.log("Baralho criado com sucesso: ", deckName);
        console.log('ID do documento criado: ', docRef.id);
    } catch (error) {
        console.error("Erro ao criar baralho:", error);
    }
}
