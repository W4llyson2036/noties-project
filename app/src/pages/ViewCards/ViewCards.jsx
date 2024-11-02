// lib
import { Link }                      from 'react-router-dom';
import { useState }                  from 'react';
import { useQuery }                  from '@tanstack/react-query';

// Components
import { FilterCards }               from './FilterCard/FilterCards';

// class
import { fetchCardsFromAllDecks }    from '../../firebase/accessData/fetchCardsFromAllDecks';

// CSS
import './ViewCards.css';

export function ViewCards() {
    const [cardsFilted, setCardsFilted] = useState('all-cards');
    const { data, isPending, isError} = useQuery({
        queryKey: ['allCards'], 
        queryFn: fetchCardsFromAllDecks,
        staleTime: Infinity,
        refetchOnMount: false
    })

    function filterCardsFromAspecificDeck(card) {
        if (cardsFilted === 'all-cards') return true;
        if (cardsFilted === card.name) return true;
    }

    if (isError) {
        return ( 
            <section className="section-view-cards">
                <div>Error:</div>
            </section>
        )
    }

    return (
        <section className="section-view-cards">
            <div className='container-search-cards a'>
                <div>
                    <input type="text" id='search-card' placeholder='search-card'/>
                    <svg className="icon-search">
                        <use xlinkHref="/public/svg/icon-search.svg#icon-search"></use>
                    </svg>
                </div>

                <FilterCards setCardsFilted={setCardsFilted} />                
            </div>

            {/* {data.length < 0 && <div>there arenot card</div>} */}

            {isPending ? (
                <div>please wait for this</div>
            ) : (
                <>
                {data
                    .filter(filterCardsFromAspecificDeck)
                    .map((card) => (
                        <div className='container-card' key={card.id}>
                            <span className='tag-deck-name'>{card.name}</span>
                            <Link to={`/viewcards/${card.name.replaceAll(" ", '-')}/${card.id}` }>
                                <button className='btn-edit-card'>edit</button>
                            </Link>
                            <p className='cardFront'>{card.cardFront} </p>
                            <p className='cardBack'>{card.cardBack}</p> 
                        </div>
                    ))}
                    </>
            )}
        </section>
    );
}