import { db }                     from "../firebaseConfig.js";
import { collection, onSnapshot } from "firebase/firestore";

export function getDocument(setMyDeck) {
    let userId = localStorage.getItem('id');

    let unsubscribe = onSnapshot(collection(db, `user - ${userId}`), (snapshot) => {
        let list = snapshot.docs.map(doc => ({
            id: doc.id,
            deckName: doc.data().deckName
        }));
       
        setMyDeck(list);
    })

    return unsubscribe;
}