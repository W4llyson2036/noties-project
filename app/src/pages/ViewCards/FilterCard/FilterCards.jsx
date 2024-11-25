// lib
import { useEffect, useState }      from "react";

// hook
import { useQuery }                 from "@tanstack/react-query";

// firebase
import { getDocument }              from "../../../firebase/accessData/getDocCurrentUser";

// state
import { useFilteredCardState }     from "../../../store/useFilterCards";

export function FilterCards() {
    const [nameOfAllDecks, setNameOfAllDecks] = useState([]);
    
    const { data: nameDesk } = useQuery({
        queryKey: ['decksNames'],
        queryFn: getDocument,
        staleTime: Infinity,
        refetchOnMount: false
    })

    // zustand
    const { setFilteredCard } = useFilteredCardState();
    
    useEffect(() => {
        setNameOfAllDecks(nameDesk);
    }, [])

    return (
        <select name="deck-names" onChange={(ev) => setFilteredCard(ev.target.value)}>
            <option value="all-cards" onClick={(ev)=> {
                setFilteredCard('all-cards');
                // setSearchQuery('');
                // setFilteredCard('');
            }}>All Cards</option> 
            
            {nameOfAllDecks.map(deck => (
                <option key={deck.id} value={deck.deckName}>
                    {deck.deckName}
                </option>
            ))}
        </select>
    )
}