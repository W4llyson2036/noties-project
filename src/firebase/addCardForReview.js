// Firebase
import { addDoc, collection } from "firebase/firestore";

export async function addCardForReview(card, ref) {
    const subCollectionRef = collection(ref.ref, 'cardsForReview');
    await addDoc(subCollectionRef, card);
}   