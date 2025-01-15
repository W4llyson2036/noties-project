// Lib
import { Link }                         from "react-router-dom";
import { useState, useEffect }          from "react";
import { useQuery }                     from "@tanstack/react-query";

// Components
import { HomeButton }                   from "./HomeButton/HomeButton";
import { Spinner }                      from "../../../components/Spinner/Spinner";
import { PopupEditText }                from "../../../components/PopupEditText/PopupEditText";

// Firebase
import { removeDeck }                   from "../../../firebase/removeDeck";

// Hooks
import { getDocument }                  from "../../../firebase/accessData/getDocCurrentUser";

// Zustand
import { useModalOverlay }              from "../../../store/useModalOverlay";

// CSS
import './home.css';

export function Home() {
    const { isModalOverlay, setIsModalOverlay } = useModalOverlay();
    const [popupValues, setPopupValues] = useState(null);
    const [decks, setDecks] = useState([]);

    const { data, isPending, refetch } = useQuery({
        queryFn: getDocument,
        queryKey: ['decksNames'],
        refetchOnMount: true
    });

    useEffect(() => {
        if (data) { setDecks(data) }
    }, [data]);

    function removeDeckFromUI(index, deckID) {
        let updatedDecks = [...decks];
        updatedDecks.splice(index, 1); 
        setDecks(updatedDecks);
        refetch(); 
        removeDeck(deckID); 
    }

    function updateDeckTitle(deckName, id) {
        setPopupValues({ value: deckName, cardID: id });
        setIsModalOverlay(!isModalOverlay);
    }
   
    return (
        <section className="section-home">
            {isModalOverlay && <PopupEditText card={popupValues} />}
            
            {isPending && <Spinner width="24" height="24" />}

            {decks.length > 0 && (
                <div className="container-deck">
                    {decks.map((item, index) => (
                        <div className="my-deck" key={index}>
                            <p className="deck-name">
                                <svg className="icon-edit-text" onClick={() => updateDeckTitle(item.deckName, item.id)}>
                                    <use href="/svg/icon-edit-text.svg#icon-edit-text"></use>
                                </svg>
                                {item.deckName}
                            </p>

                            <div className="container-deck-buttons">
                                <HomeButton
                                    name="add"
                                    endpoint={`/home/createcard/${item.deckName}/${item.id}`}
                                    bg="green"
                                />

                                <HomeButton
                                    name="review"
                                    endpoint={`/home/review/${item.deckName}/${item.id}`}
                                    bg="blue"
                                    availableCard={item.numberOfCards}
                                />

                                <HomeButton
                                    name="delete"
                                    bg="#FF2727"
                                    setRemoveDeck={() => removeDeckFromUI(index, item.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!isPending && decks.length < 1 && (
                <>
                    <Link to="/createnewdeck">
                        <h2 className="container-home">Create new deck</h2>
                    </Link>
                </>
            )}
        </section>
    );
}