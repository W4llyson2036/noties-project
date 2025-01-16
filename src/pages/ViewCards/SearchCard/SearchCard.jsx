// lib
import { React, useState }          from "react";

// state
import { useCardSearch }            from "../../../store/useCardSearchStore";
import { useFilteredCardState }     from "../../../store/useFilterCards";

export function SearchCard() {
    const [inputValue, setInputValue] = useState('');
    const [isIconState, setIsIconState] = useState(true);
    
    // zustand
    const { setSearchQuery, cardSearchResetState } = useCardSearch();
    const { setFilteredCard } = useFilteredCardState();

    function toggleIcon() {
        if (isIconState) {
            setSearchQuery(inputValue);
            setIsIconState(false);
            return;
        }
        
        setInputValue('');
        setFilteredCard('All Cards');
        setIsIconState(true);
        cardSearchResetState();
        return;
    }

    return (
        <div>
            <input 
                type="text" 
                id='search-card' 
                placeholder='search-card' 
                value={inputValue}
                onChange={(ev) => setInputValue(ev.target.value)}
                onClick={() => {setIsIconState(true)}}
            />

            <div className={`icon-search ${isIconState ? "icon-search-true" : "icon-search-false"}`} onClick={(ev) => toggleIcon(ev)}>
                {isIconState
                    ? <svg>
                        <use href="/svg/icon-search.svg#icon-search" ></use>
                      </svg>
                    : <svg>
                        <use href="/svg/icon-delete.svg#icon-delete"></use>
                      </svg>}
            </div>
        </div>
    )
}