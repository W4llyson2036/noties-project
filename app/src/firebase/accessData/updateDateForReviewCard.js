import { db } from "../firebaseConfig";
import { collection, updateDoc, doc, getDoc } from "firebase/firestore";

export async function updateDateForReviewCard(collectionId, answerValue, cardId) {
    const collectionRef = collection(db, `user - ${localStorage.getItem('id')}`);
    // Obtenha a referência do documento da coleção que contém os cartões que você deseja atualizar
    const subCollectionRef = doc(collectionRef, collectionId); 
    // Referência para o documento do cartão que você deseja atualizar
    const cardDocRef = doc(subCollectionRef, 'cardsForReview', cardId);
    // 'getDoc()"" é usado para obter um snapshot de um documento específico no Firestore
    const cardDocSnapshot = await getDoc(cardDocRef);

    let resultForNextReviewUpdated = await setTheDateForTheNextReview(cardDocSnapshot);

    if (answerValue === 'good') {
        await updateDoc(cardDocRef, {
            dateNextReview: resultForNextReviewUpdated.nextReviewDate,
            doubleDays: resultForNextReviewUpdated.days,
        });
    } else {
        await updateDoc(cardDocRef, {
            dateNextReview: null,
            doubleDays: 24
        });
    }
}

async function setTheDateForTheNextReview(card) {
    let currentDate = new Date();
    let increaseDays = (card.data().doubleDays) * 2;  
    let nextReviewDate = new Date(currentDate.setTime(currentDate.getTime() + (increaseDays * 3600 * 1000))).toISOString().slice(0, 10);

    return {
        days: increaseDays, 
        nextReviewDate: nextReviewDate
    }; 
}