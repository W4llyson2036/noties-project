import { db } from "./firebaseConfig";
import { auth } from "./firebaseConfig";
import { collection, doc, addDoc, getDocs } from "firebase/firestore";

export async function addCard(card, param) {
    try {
        const collRef = collection(db, `user - ${auth.currentUser.uid}`);
        const querySnapshot = await getDocs(collRef);
        const matchingDoc = querySnapshot.docs.find(doc => doc.id === param);
        const subCollectionRef = collection(matchingDoc.ref, 'Subcolecao');
        
        await addDoc(subCollectionRef, {
            cardFront: card.cardFront,
            cardBack: card.cardBack
        });

    } catch (error) {
        console.error('Error fetching documents: ', error);
        throw error;
    }
}