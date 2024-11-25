// lib
import { useEffect }                from "react";
import { useQuery }                 from "@tanstack/react-query";
import { Link }                     from "react-router-dom";

// firebase
import { fetchCardsFromAllDecks }   from "../../../firebase/accessData/fetchCardsFromAllDecks";

// components 
import { HighLightText }            from "../SearchCard/HighLightText";

// state
import { useFilteredCardState }     from "../../../store/useFilterCards";
import { useCardSearch }            from "../../../store/useCardSearchStore";

export function CardMapper() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['allCards'], 
        queryFn: fetchCardsFromAllDecks,
        staleTime: Infinity,
        refetchOnMount: false
    })
    
    // zustand
    const { searchQuery, cardSearchResetState } = useCardSearch();
    const { filteredCard } = useFilteredCardState();

    useEffect(() => {
        return () => {cardSearchResetState()} 
    }, [])

    function filterDeckCards(card) {
        if (filteredCard === 'all-cards') return true;
        if (filteredCard === card.name) return true;
    }

    function filterCards(card) {
        if (card.cardFront.toLowerCase().includes(searchQuery)) return true;
        if (card.cardBack.toLowerCase().includes(searchQuery)) return true;
        return false; 
    }

    return (
        <>
            {data
                ?.filter(filterDeckCards)
                .filter(filterCards)   
                .map((card) => {
                    return (
                        <div className='container-card' key={card.id}>
                            <span className='tag-deck-name'>{card.name}</span>
                            
                            <Link to={`/viewcards/${card.name.replaceAll(" ", '-')}/${card.id}` }>
                                <button className='btn-edit-card'>edit</button>
                            </Link>
                            
                            <p className='cardFront'>
                                {Boolean(searchQuery)
                                    ? <HighLightText txt={card.cardFront} target={searchQuery}/>
                                    : <>{card.cardFront}</>}
                                </p>
                           
                            <p className='cardBack'>
                                {Boolean(searchQuery)
                                    ? <HighLightText txt={card.cardBack} target={searchQuery}/>
                                    : <>{card.cardBack}</>}
                            </p> 
                        </div>  
                    )
                })
            }
        </>
    )
}