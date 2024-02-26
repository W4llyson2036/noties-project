import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig.js";

export async function getDocument(userId, setMyDeck) {
    console.log('getData: ', userId)
    const collectionRef = collection(db, `user - ${userId}`);
    const query = await getDocs(collectionRef);
    const list = query.docs.map(doc => ({
        id: doc.id,
        deckName: doc.data().deckName 
    }));

    console.log(list)
    return setMyDeck(list);
}