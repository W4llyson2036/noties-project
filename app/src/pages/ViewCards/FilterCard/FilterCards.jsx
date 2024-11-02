// lib
import { useEffect, useState }  from "react";

// hook
import { getDocument }          from "../../../firebase/accessData/getDocCurrentUser";

export function FilterCards({ setCardsFilted }) {
    const [nameOfAllDecks, setNameOfAllDecks] = useState([]);
    const { data } = getDocument();

    useEffect(() => {
        if (data) setNameOfAllDecks(data);
    }, []);

    return (
        <select name="deck-names" id="" onClick={(ev) => setCardsFilted(ev.target.value)} >
             <option value="all-cards">All Cards</option> 
            
            {nameOfAllDecks.map(deck => (
                 <option key={deck.id} value={deck.deckName}>{deck.deckName}</option>
            ))}
        </select>
    )
}