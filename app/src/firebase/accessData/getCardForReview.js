import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function getCardForReview(params) {
    try {
        const userCollectionRef = collection(db, `user - ${localStorage.getItem('id')}`);
        const userDocs = await getDocs(userCollectionRef);
        const userDoc = userDocs.docs.find(doc => doc.data().deckName === params.deckname);
        const cardsForReviewCollectionRef = collection(userDoc.ref, 'cardsForReview');
        const cardsForReviewDocs = await getDocs(cardsForReviewCollectionRef);
       
        const listCardsForReview = cardsForReviewDocs.docs.map(doc => ({
            id: doc.id,
            cardFront: doc.data().cardFront,
            cardBack: doc.data().cardBack,
            createdAt: doc.data().createdAt ? {
                date: doc.data().createdAt.date,
                hour: doc.data().createdAt.hour,
            } : null,
            reviewAt: doc.data().reviewAt,
        }));

        return listCardsForReview;
        
    } catch (error) {
        console.error("Erro ao obter documentos:", error);
    }
}