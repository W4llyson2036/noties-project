// lib
import { useEffect, useRef, useState }      from "react";

// hooks
import { useRefetchQuery }                  from "../../hooks/useRefetchQuery";

// Components
import { UniversalButton }                  from "../../components/UniversalButton/UniversalButton";

// Firebase
import { createDeck }                       from "../../firebase/createDeck";

// CSS
import './createNewDeck.css'

export function CreateNewDeck() {
    const refetchQuery = useRefetchQuery(); 
    const inputRef = useRef();
    const [deckName, setDeckName] = useState('');
    const [messageCreatedDeck, setMessageCreatedDeck] = useState({
        state: null,
        deckWasNotCreated: 'deck was not created', 
        deckWasCreated: 'deck was created',
    });

    useEffect(() => {
        inputFocus();
    }, [deckName]);
    
    function handleInput(value) {
        setDeckName(value);
    }

    function inputFocus() { 
        inputRef.current.focus();
    }

    function cleanInput() {     
        setDeckName(''); 
        refetchQuery('decksNames');
    }

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

                <div className="display-message-when-creating-deck">
                    {messageCreatedDeck.state === true && 
                    <p className="deckWasCreated">{messageCreatedDeck.deckWasCreated}</p>}

                    {messageCreatedDeck.state === false && 
                    <p className="deckWasNotCreated">{messageCreatedDeck.deckWasNotCreated} </p>}
                </div>
                {/* add link  */}
                <UniversalButton 
                    value='create new deck' 
                    bg='#00A400'
                    width='50%'
                    margin='auto'
                    padding='1rem'
                    click={() => createDeck(deckName, cleanInput, setMessageCreatedDeck)}
                    />
            </div>
        </section>
    )
}