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

    function toggleIcon(ev) {
        if (ev.target.dataset.action === 'searchClick') {
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
                onClick={() => { 
                    setIsIconState(true);
                }}/>

            <div className={`icon-search ${isIconState ? "icon-search-true" : "icon-search-false"}`} onClick={(ev) => toggleIcon(ev)} >
                {isIconState
                    ? <svg data-action="searchClick">
                        <use href="/svg/icon-search.svg#icon-search" data-action="searchClick"></use>
                      </svg>
                    : <svg data-action="searchClean">
                        <use xlinkHref="/public/icon-delete.svg#icon-delete" data-action="searchClean"></use>
                      </svg>}
            </div>
        </div>
    )
}