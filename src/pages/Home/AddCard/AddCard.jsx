import React, { useState }          from "react";
import { useParams }                from "react-router-dom";

// Components
import { addCard }                  from "../../../firebase/addCard.js";
import { UniversalButton }          from "../../../components/UniversalButton/UniversalButton";

import { useRefetchQuery }          from "../../../hooks/useRefetchQuery.js";

// CSS
import './addCard.css';

export function AddCard() {
    let refetch = useRefetchQuery(); 
    const params = useParams();
    const [card, setCard] = useState({
        cardFront: '',
        cardBack: ''
    });

    function handleCardInput(ev) {
        const { name, value } = ev.target;
        setCard(prevCard => ({...prevCard, [name]: value}));
    }

    function cleanInput() {
        setCard(() => ({
            cardFront: '',
            cardBack: ''
        }))
        refetch('allCards');
    }

    return (
        <section className="section-create-card">
            <div className="container-new-card">
                <p className="deckname">{`deck: ${params.fordeckname}`}</p>

                <input 
                    name="cardFront"
                    type="text" 
                    placeholder="Front of Card"
                    className="input-card-text"
                    value={card.cardFront}
                    onChange={handleCardInput}    
                    />
                
                <textarea 
                    name="cardBack" 
                    id="" 
                    cols="10"
                    className="input-card-text input-card-textarea"
                    rows="30"
                    value={card.cardBack}
                    placeholder="Back of Card"
                    onChange={handleCardInput}    
                    >
                </textarea>

                <div className="create-card-button">
                    <div>
                        <UniversalButton 
                            width='100%' 
                            value='add' 
                            padding='0.5rem' 
                            bg='#1F734A' 
                            click={() => addCard(card, params.id, cleanInput)}
                            />
                    </div>

                    <div>
                        <UniversalButton 
                            width='100%' 
                            value='clean' 
                            padding='0.5rem' 
                            bg='#FF2727'
                            click={cleanInput}/>
                    </div>
                </div>
            </div>
        </section>
    )
}