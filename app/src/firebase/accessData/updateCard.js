// firebase
import { db }                               from "../firebaseConfig";
import { collection, getDocs, updateDoc }   from "firebase/firestore";

export async function updateCard(deckName, cardID, newsValues) {
    try {
        const COLL_REF = collection(db, `user - ${localStorage.getItem('id')}`);
        const COLL_DOCS_REF = await getDocs(COLL_REF);
        const SUB_COLL_NAME = COLL_DOCS_REF.docs.find(docs => docs.data().deckName == deckName);
        const SUB_COLL_REF = collection(SUB_COLL_NAME.ref, 'cardsForReview');
        const SUB_COLL_DOCS = await getDocs(SUB_COLL_REF);
        const CARD = SUB_COLL_DOCS.docs.find(docs => docs.id == cardID);

        await updateDoc(CARD.ref, {
            cardFront: newsValues.cardFront,
            cardBack: newsValues.cardBack,
        })
    } catch (error) {
        console.log('function UPDATE_CARD: ', error);
    }
}