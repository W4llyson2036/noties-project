import { db }                  from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function fetchCardsFromAllDecks() {
    try {
        const ALL_USER_COLLECTIONS_REF = collection(db, `user - ${localStorage.getItem('id')}`);
        const DOCS_REF = await getDocs(ALL_USER_COLLECTIONS_REF);
        
        let listAllCards = [];

        for (let i=0; i<=DOCS_REF.docs.length-1; i++) {
            const DECK = collection(DOCS_REF.docs[i].ref, 'cardsForReview');
            const CARDS = await getDocs(DECK);
            
            CARDS.forEach(card => {
                listAllCards.push({id: card.id, ...card.data()});
            })
        }
        
        return listAllCards;
    } catch (error) {
        console.log("fetchCardsFromAllDecks: ", error);
    } 
}