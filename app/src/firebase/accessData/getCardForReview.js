import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// Class
import { FormatDate } from "../../utils/formateDateAndTime";

export async function getCardForReview(params) {
    const Format_Date = new FormatDate().getFormattedDate();
    const CURRENT_DATE = Format_Date.getFormattedDate;

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
            dateNextReview: doc.data().dateNextReview,
        }));

        let listOfCardAvailableToReview = [];

        for(let i = 0; i < listCardsForReview.length; i++) {
            if (listCardsForReview[i].dateNextReview === null || listCardsForReview[i] == CURRENT_DATE) {
                listOfCardAvailableToReview.push(listCardsForReview[i]);
            }
        }

        return listOfCardAvailableToReview;
        
    } catch (error) {
        console.error("Erro ao obter documentos:", error);
    }
}