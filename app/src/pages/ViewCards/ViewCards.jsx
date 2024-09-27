// lib
import { useEffect, useState }       from 'react';
import { Link }                      from 'react-router-dom';

// hooks
import { getDocument }               from '../../firebase/accessData/getDocCurrentUser';

// class
import { useFetchCardsFromAllDecks } from '../../firebase/accessData/fetchCardsFromAllDecks';

// CSS
import './ViewCards.css';

export function ViewCards() {
    const [nameOfAllDecks, setNameOfAllDecks] = useState([]);
    const [allCards, setAllCards] = useState([]);
    const { data } = useFetchCardsFromAllDecks();

    useEffect(() => {
        getDocument(setNameOfAllDecks);
        if (data) {
            setAllCards(data);
        }
    }, [data]);

    return (
        <section className="section-view-cards">
            <div className='container-search-cards a'>
                <div>
                    <input type="text" id='search-card' placeholder='search-card'/>
                    <svg className="icon-search">
                        <use xlinkHref="/public/svg/icon-search.svg#icon-search"></use>
                    </svg>
                </div>

                <select name="deck-names" id="">
                    {nameOfAllDecks.map(deck => (
                        <option key={deck.id} value={deck.deckName}>{deck.deckName}</option>
                    ))}
                </select>
            </div>

            {allCards.map((card, index) => (
                <div className='container-card' key={card.id}>
                    <span className='tag-deck-name'>{card.name}</span>
                    <Link to={`/viewcards/${card.name.replaceAll(" ", '-')}/${index}-${card.id}` }>
                        <button className='btn-edit-card'>edit</button>
                    </Link>
                    <p className='cardFront'>{card.cardFront} </p>
                    <p className='cardBack'>{card.cardBack}</p> 
                </div>
            ))}
        </section>
    );
}