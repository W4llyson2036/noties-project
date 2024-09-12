// lib
import { useEffect, useState }    from 'react';

// hooks
import { getDocument }            from '../../firebase/accessData/getDocCurrentUser';

// class
import { fetchCardsFromAllDecks } from '../../firebase/accessData/fetchCardsFromAllDecks';

// CSS
import './ViewCards.css';

export function ViewCards() {
    const [nameOfAllDecks, setNameOfAllDecks] = useState([]);
    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
        getDocument(setNameOfAllDecks);
        fetchCardsFromAllDecks().then(resuld => setAllCards(resuld));
    }, []);

    return (
        <section className="section-view-cards">
            <div className='container-search-cards'>
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

            {allCards.map((card) => (
                <div className='container-card' key={card.id}>
                    <p className='cardFront'>{card.cardFront} </p>
                    <p className='cardBack'>{card.cardBack}</p>
                </div>
            ))}
        </section>
    );
}