import { db }                           from "./firebaseConfig";
import { auth }                         from "./firebaseConfig";
import { collection, addDoc, getDocs }  from "firebase/firestore";
import { addCardForReview }             from "./addCardForReview";

// Class
import { FormatTime, FormatDate }       from "../utils/formateDateAndTime";

export async function addCard(card, param, cleanInput) {
    const FORMATTED_TIME = new FormatTime();
    const FORMATTED_DATE = new FormatDate();

    try {
        const collRef = collection(db, `user - ${auth.currentUser.uid}`);
        const querySnapshot = await getDocs(collRef);
        const matchingDoc = querySnapshot.docs.find(doc => doc.id === param);
        const subCollectionRef = collection(matchingDoc.ref, 'Subcolecao');

        const NEW_CARD = {
            cardFront: card.cardFront,
            cardBack: card.cardBack,
            createdAt: {
                date: FORMATTED_DATE.getFormattedDate(), 
                hour: FORMATTED_TIME.time(),
            },
            dateNextReview: 'null',
            doubleDays: 12,
        };
        
        await addDoc(subCollectionRef, { NEW_CARD });
        addCardForReview(NEW_CARD, matchingDoc);
        cleanInput();
    } catch (error) {
        console.error('Error fetching documents: ', error);
        throw error;
    };
};