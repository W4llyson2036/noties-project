import { db } from "./firebaseConfig";
import { auth } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addCard(card, param) {
    const date = new Date();

    try {
        const collRef = collection(db, `user - ${auth.currentUser.uid}`);
        const querySnapshot = await getDocs(collRef);
        const matchingDoc = querySnapshot.docs.find(doc => doc.id === param);
        const subCollectionRef = collection(matchingDoc.ref, 'Subcolecao');
        
        await addDoc(subCollectionRef, {
            cardFront: card.cardFront,
            cardBack: card.cardBack,
            createdAt: {
                date: date.toDateString(),
                hour: formateHours(),
            },
        });

    } catch (error) {
        console.error('Error fetching documents: ', error);
        throw error;
    };
};

function formateHours() {
    const TIME = new Date();
    const HOUR = TIME.getHours() < 10 ? `0${TIME.getHours()}` : TIME.getHours();
    const MINUTE = TIME.getMinutes() < 10 ? `0${TIME.getMinutes()}` : TIME.getMinutes();
    const SECONDS = TIME.getSeconds() < 10 ? `0${TIME.getSeconds()}` : TIME.getSeconds();
    const TIME_THE_CARD_WAS_CREATED = `${HOUR}:${MINUTE}:${SECONDS}`;
    
    return TIME_THE_CARD_WAS_CREATED;
};