import React, { useState } from "react";
import './addCard.css'
import { UniversalButton } from "../../../components/UniversalButton/UniversalButton";

export function AddCard() {
    const [card, setCard] = useState({
        cardFront: '',
        cardBack: ''
    });

    function handleCardInput(ev) {
        const { name, value } = ev.target;
        setCard(prevCard => ({...prevCard, [name]: value}));
    }

    function add() {
        console.log('added')
    }

    function cancel() {
        console.log('cancel')
    }

    console.log(card.cardFront)
    console.log(card.cardBack)

    return (
        <section className="section-create-card">
            <div className="container-new-card">
                <p className="deckname">Deck: name hahaah k here testeng kaksas lksklaksla skasja akskajs skajksjas</p>

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
                        <UniversalButton width='100%' value='add' padding='0.5rem' bg='#1F734A' 
                        click={add}/>
                    </div>

                    <div>
                        <UniversalButton width='100%' value='cancel' padding='0.5rem' bg='#FF2727'
                        click={cancel}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
