// lib
import { useEffect, useState }      from "react";
import { Link }                     from "react-router-dom";

// components 
import { HighLightText }            from "../SearchCard/HighLightText";

// Zustand
import { useFilteredCardState }     from "../../../store/useFilterCards";
import { useCardSearch }            from "../../../store/useCardSearchStore";
import { useModalOverlay }          from "../../../store/useModalOverlay";
import { useHoldCardIdToDelete }    from "../../../store/useHoldCardIdToDelete";

// CSS
import "./cardMapper.css";

export function CardMapper({ data, isModalDelete, setSsModalDelete }) {
    // zustand
    const { searchQuery, cardSearchResetState } = useCardSearch();
    const { filteredCard } = useFilteredCardState();
    const { isModalOverlay, setIsModalOverlay } = useModalOverlay();
    const { setCardIdToDelete } = useHoldCardIdToDelete();

    useEffect(() => {
        return () => { cardSearchResetState() } 
    }, [])

    function filterDeckCards(card) {
        if (filteredCard === 'All Cards') return true;
        if (filteredCard === card.name) return true;
    }

    function filterCards(card) {
        if (card.cardFront.toLowerCase().includes(searchQuery)) return true;
        if (card.cardBack.toLowerCase().includes(searchQuery)) return true;
        return false; 
    }

    let listCardWillBeUsed = data
        ?.filter(filterDeckCards)
        .filter(filterCards)   
        .map((card) => {
            return (
                <div className='container-card' key={card.id} onClick={() => setCardIdToDelete(card.id)}>
                    <p className='cardFront'>
                        {Boolean(searchQuery)
                            ? <HighLightText txt={card.cardFront} target={searchQuery}/>
                            : <>{card.cardFront}</>}
                            
                        <span className='tag-deck-name'>{card.name}</span>
                    </p>
                    <div className='cardBack'>
                        {Boolean(searchQuery)
                            ? <HighLightText txt={card.cardBack} target={searchQuery}/>
                            : <>{card.cardBack}</>}

                        <div className="container-card-btns">
                            <div className="flexx">
                                <button className='btns btn-delete' onClick={() => setIsModalOverlay(!isModalOverlay)}>delete</button>

                                <Link to={`/viewcards/${card.name.replaceAll(" ", '-')}/${card.id}` }>
                                    <button className='btns btn-edit'>edit</button>
                                </Link>
                            </div>
                        </div> 
                    </div>
                </div>  
            )
        })
        
    return (
        <>
            {listCardWillBeUsed.length > 0 
                ? listCardWillBeUsed
                : <div className="text-card-not-found">this deck is empty!😞</div>
            }
        </>
    )
}

// to-do
// [ ] - create modal for the delete deck (home); 