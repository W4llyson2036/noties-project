import { db, auth }             from "./firebaseConfig.js";
import { collection, addDoc }   from "firebase/firestore";

export async function createDeck(deckName, cleanInput, setMessageCreatedDeck) {
    try {
        if (deckName === '') {
            setMessageCreatedDeck(prevState => ({ ...prevState, state: false }));

            setTimeout(() => {
                setMessageCreatedDeck(prevState => ({ ...prevState, state: null }));
            }, 2000);
            return;
        }

        const primaryColRef = collection(db, `user - ${auth.currentUser.uid}`);
        await addDoc(primaryColRef, { deckName });
        cleanInput();
        setMessageCreatedDeck(prevState => ({ ...prevState, state: true }));

        setTimeout(() => {
            setMessageCreatedDeck(prevState => ({ ...prevState, state: null }));
        }, 2000);
    } catch (error) {
        console.error("Erro ao criar baralho:", error);
    }
}