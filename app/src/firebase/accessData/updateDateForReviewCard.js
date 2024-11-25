import { db }                                   from "../firebaseConfig";
import { collection, updateDoc, doc, getDoc }   from "firebase/firestore";

export async function updateDateForReviewCard(collectionId, answerValue, cardId) {
    const collectionRef = collection(db, `user - ${localStorage.getItem('id')}`);
   
    // Obtenha a referência do documento da coleção que contém os cartões que você deseja atualizar
    const subCollectionRef = doc(collectionRef, collectionId); 
   
    // Referência para o documento do cartão que você deseja atualizar
    const cardDocRef = doc(subCollectionRef, 'cardsForReview', cardId);
   
    // 'getDoc()"" é usado para obter um snapshot de um documento específico no Firestore
    const cardDocSnapshot = await getDoc(cardDocRef);

    if (answerValue === 'good') {
        let newDate = await newDateForCardWithCorrectAnswer(cardDocSnapshot);
        
        await updateDoc(cardDocRef, {
            dateNextReview: newDate.nextReviewDate,
            doubleDays: newDate.days,
        });
    }  
   
    if (answerValue === 'bad') {
        let newDate = await newDateForCardWithIncorrectAnswer(cardDocSnapshot);
        
        await updateDoc(cardDocRef, {
            dateNextReview: newDate.nextReviewDate,
            doubleDays: 12,
        });
    }
}

async function newDateForCardWithCorrectAnswer(card) {
    let currentDate = new Date();
    let increaseDays = (card.data().doubleDays) * 2;  
    let nextReviewDate = new Date(currentDate.setTime(currentDate.getTime() + (increaseDays * 3600 * 1000))).toISOString().slice(0, 10);

    return {
        days: increaseDays, 
        nextReviewDate: nextReviewDate
    }; 
}

async function newDateForCardWithIncorrectAnswer() {
    let currentDate = new Date();
    let nextReviewDate = new Date(currentDate.setTime(currentDate.getTime() + (24 * 3600 * 1000))).toISOString().slice(0, 10);
    
    return {
        nextReviewDate: nextReviewDate
    }; 
}