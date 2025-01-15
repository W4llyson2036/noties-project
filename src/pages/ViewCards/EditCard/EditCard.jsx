// lib
import { useParams,Link }               from "react-router-dom";
import React, { useEffect, useState }   from "react";
import { useQueryClient, useMutation,
        useQuery }                      from "@tanstack/react-query";

// hooks
import { fetchCardsFromAllDecks }       from "../../../firebase/accessData/fetchCardsFromAllDecks";

// Firebase
import { updateCard }                   from "../../../firebase/accessData/updateCard";

// components
import { UniversalButton }              from "../../../components/UniversalButton/UniversalButton";

// CSS
import './EditCard.css';

export function EditCard() {
    const queryClient = useQueryClient(); 
    const PARAMS = useParams();
    const [currentCard, setCurrentCard] = useState({}); 
    const { data, isPending } = useQuery({
        queryKey: ['allCards'], 
        queryFn: fetchCardsFromAllDecks,
        staleTime: Infinity,
    });

    const mutation = useMutation({
        mutationFn: ({ params, cardid, currentCard }) => updateCard(params, cardid, currentCard),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['allCards'] });
        }
    });

    useEffect(() => {
        if (data) {
            setCurrentCard(data.find(card => card.id === PARAMS.id));  
        }
    }, [data]);

    if (isPending) {
        return <p>Loading...</p>;
    }

    function handleInput(e) {
        const { value, name } = e.target; 
        setCurrentCard(currentValue => ({...currentValue, [name]: value}));
    }

    function saveChange() {
        mutation.mutate({
            params: PARAMS.deckname.replace(/-/g, ' '),
            cardid: PARAMS.id,
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
                        value={currentCard.cardFront || ''}
                        onChange={(e => handleInput(e))}
                        >
                    </textarea>
                    <textarea 
                        className="input-edit-cardback"
                        name="cardBack" 
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