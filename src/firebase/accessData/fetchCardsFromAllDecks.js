// firebase
import { db }                              from "../firebaseConfig";
import { collection, getDocs }             from "firebase/firestore";

export async function fetchCardsFromAllDecks() {
    try {
        const COLLECTIONS_REF = collection(db, `user - ${localStorage.getItem('id')}`);
        const COLLECTION_DOCS_REF = await getDocs(COLLECTIONS_REF);
       
        let listAllCards = [];  
       
        for (let i=0; i<=COLLECTION_DOCS_REF.docs.length-1; i++) {
            const SUB_COLL_REF = collection(COLLECTION_DOCS_REF.docs[i].ref, 'cardsForReview');
            const SUB_COLL_DOCS = await getDocs(SUB_COLL_REF);
            const nameDeck = COLLECTION_DOCS_REF.docs[i].data().deckName

            SUB_COLL_DOCS.forEach(card => {
                listAllCards.push({
                    id: card.id, 
                    ...card.data(), 
                    name: nameDeck
                });
            })
        }  

        return listAllCards;
    } catch (error) {
        throw new Error('Error while trying to fetch all cards from your collection');
    } 
}