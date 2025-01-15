// firebase
import { db }                  from "../firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";

// class
import { FormatDate }          from "../../utils/formateDateAndTime.js";

export async function getDocument() {
    try {
        const COLL_REF = collection(db, `user - ${localStorage.getItem('id')}`);
        const COLL_DOCS_REF = await getDocs(COLL_REF);
        
        const LIST_DECK = [];

        for (let doc of COLL_DOCS_REF.docs) {
            let SUB_COLL_REF = collection(doc.ref, 'cardsForReview');
            let SUB_COLL_DOCS = await getDocs(SUB_COLL_REF);

            let AVOID_COUNT_CARD = new FormatDate().getFormattedDate();   
            let total = 0;
            
            for (let subDeck of SUB_COLL_DOCS.docs) {
                if (AVOID_COUNT_CARD >= subDeck.data().dateNextReview || subDeck.data().dateNextReview == 'null') {
                    total++;
                }
            }
            
            LIST_DECK.push({
                id: doc.id,
                deckName: doc.data().deckName,
                numberOfCards: total
            })
        }

        return LIST_DECK;
    } catch (error) {
        console.log('function getDocument: ', error);        
    }
}