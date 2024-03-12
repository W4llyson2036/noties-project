import React, { useEffect, useRef, useState } from "react";

// Components
import { UniversalButton } from "../../components/UniversalButton/UniversalButton";

// Firebase
import { createDeck } from "../../firebase/createDeck";

// CSS
import './createNewDeck.css'

export function CreateNewDeck() {
    const [deckName, setDeckName] = useState('');
    const inputRef = useRef();

    function handleInput(value) {
        setDeckName(value);
    }

    function inputFocus() { inputRef.current.focus()};

    useEffect(() => {
        inputFocus();
    }, []);

    return (
        <section className="section-create-new-deck">
            <div className="container-create-new-deck">
                <input 
                    ref={inputRef}
                    type="text" 
                    className="input-field"
                    value={deckName}
                    onChange={ev => handleInput(ev.target.value)}
                    />

                <UniversalButton 
                    value='create new deck' 
                    bg='#00A400'
                    width='50%'
                    margin='auto'
                    padding='1rem'
                    click={() => createDeck(deckName)}
                    />
            </div>
        </section>
    )
}


