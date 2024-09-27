// lib
import React, { useEffect, useState }   from "react";
import { useParams,Link }               from "react-router-dom";
import { useQueryClient, useMutation }  from "@tanstack/react-query";

// hooks
import { useFetchCardsFromAllDecks }    from "../../../firebase/accessData/fetchCardsFromAllDecks";

// javascript
import { updateCard }                   from "../../../firebase/accessData/updateCard";

// components
import { UniversalButton }              from "../../../components/UniversalButton/UniversalButton";

// CSS
import './EditCard.css';

export function EditCard() {
    const queryClient = useQueryClient();
    const PARAMS = useParams();
    const [currentCard, setCurrentCard] = useState(null); 
    const { data, isLoading } = useFetchCardsFromAllDecks();

    const mutation = useMutation({
        mutationFn: ({ params, cardid, currentCard }) => updateCard(params, cardid, currentCard),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['allCards'] });
        }
    });
  
    useEffect(() => {
        if (data) {
            const CARD_INDEX = PARAMS.id.slice(0, PARAMS.id.indexOf('-'));    
            setCurrentCard(data[CARD_INDEX]);  
        }
    }, [data]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!currentCard) {
        return <p>Card not found or loading...</p>;
    }

    function handleInput(e) {
        const { value, name } = e.target; 
        setCurrentCard(currentValue => ({...currentValue, [name]: value}));
    }

    function saveChange() {
        const CARD_ID = PARAMS.id.slice(PARAMS.id.indexOf('-') + 1);    

        mutation.mutate({
            params: PARAMS.deckname,
            cardid: CARD_ID,
            currentCard: currentCard
        });
    }

    return (
        <section className="section-edit-cards">
            <div>
                <form action="#" className="">
                    <textarea 
                        className="input-edit-cardfront"
                        name="cardFront" 
                        id="" 
                        value={currentCard.cardFront || ''}
                        onChange={(e => handleInput(e))}
                        >
                    </textarea>
                    <textarea 
                        className="input-edit-cardback"
                        name="cardBack" 
                        id="" 
                        value={currentCard.cardBack || ''}
                        onChange={(e => handleInput(e))}
                    >
                    </textarea>
                </form>
                
                <div className="container-btns">
                    <Link to='/viewcards' className="ok">
                        <UniversalButton 
                            bg='#2d2d2d' 
                            width='100%' 
                            value='back' 
                            padding='0.3rem'
                        />
                    </Link>

                    <UniversalButton 
                        bg='#00A400' 
                        width='100%' 
                        value='save changes' 
                        padding='0.3rem'
                        click={saveChange}  
                    />
                </div>
            </div>
        </section>
    );
}