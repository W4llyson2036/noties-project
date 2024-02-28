import { db } from "../firebaseConfig.js";
import { collection, onSnapshot } from "firebase/firestore";

export function getDocument(userId, setMyDeck) {
    let unsubscribe = onSnapshot(collection(db, `user - ${userId}`), (snapshot) => {
        let list = snapshot.docs.map(doc => ({
            id: doc.id,
            deckName: doc.data().deckName
        }));
       
        setMyDeck(list);
    })

    return unsubscribe;
}