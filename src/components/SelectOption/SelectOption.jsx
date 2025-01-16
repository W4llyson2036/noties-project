// lib
import { useState, useEffect }      from 'react';

// hook
import { useQuery }                 from "@tanstack/react-query";

// state
import { useFilteredCardState }     from '../../store/useFilterCards';

// firebase
import { getDocument }              from "../../../src/firebase/accessData/getDocCurrentUser";

// CSS
import './selectOption.css';

export function SelectOption() {
    // zustand
    const { setFilteredCard, filteredCard } = useFilteredCardState();

    const [nameOfAllDecks, setNameOfAllDecks] = useState([]);
    const [value, setValue] = useState('All Cards'); 
    const [openSelectOption, setopenSelectOption] = useState(false); 

    const { data } = useQuery({
        queryKey: ['decksNames'],
        queryFn: getDocument,
        staleTime: Infinity,
        refetchOnMount: false
    })
    
    useEffect(() => {
        if (data) { setNameOfAllDecks(data); }
        setFilteredCard('All Cards');
    }, [data])

    
    function clicked_on_the_selection_option(ev) {
        if (ev.target.classList == "select-option-name-deck") {
            setopenSelectOption(!openSelectOption);
        }

        if (ev.target.classList[0] == "icon-filter" && openSelectOption) {
            setopenSelectOption(!openSelectOption);
            setFilteredCard(value);
        }
    }
    
    return (
        <div className='container-select-option'>
            <p className='select-option-name-deck' onClick={(ev) => clicked_on_the_selection_option(ev)}>
                {value}
            </p>

            <svg className="icon-filter" onClick={(ev) => clicked_on_the_selection_option(ev)}>
                <use href="/svg/icon-filter.svg#water-filter-6557" className='icon-filter'></use>
            </svg>
            
            <div onClick={(ev) => setValue(ev.target.firstChild.data)}
                 className={` container-option ${ openSelectOption ? "container-option-open" : "container-option-closed" }`} >
                   
                <p className='option'>All Cards</p>

                {nameOfAllDecks.map((el, id) => (
                    <p className='option' key={id}>{el.deckName}</p>
                ))}
            </div> 
        </div>
    )
}