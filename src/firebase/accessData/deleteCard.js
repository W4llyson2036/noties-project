import { db } from "../firebaseConfig";

import { collection, getDocs, deleteDoc } from "firebase/firestore";

export async function deleteCard(collectionTargetID, cardID) {
    try {
        const USER_REF = collection(db, `user - ${localStorage.getItem('id')}`);
        const ALL_COLL_REF = await getDocs(USER_REF);
        const COLL_REF = ALL_COLL_REF.docs.find(doc => doc.data().deckName == collectionTargetID);
        const DOCS_REF = collection(COLL_REF.ref, 'cardsForReview');
        const SUB_COLL = await getDocs(DOCS_REF);
        const CARD = SUB_COLL.docs.find(docs => docs.id == cardID);

        await deleteDoc(CARD.ref);
    } catch (error) {
        console.log('deleteCard(); ---------------------->', collectionTargetID, cardID);
    }
}