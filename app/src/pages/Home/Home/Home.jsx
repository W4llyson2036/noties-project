import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

// Components
import { UniversalButton } from "../../../components/UniversalButton/UniversalButton";

// Firebase
import { getDocument } from "../../../firebase/accessData/getDocCurrentUser";
import { removeDeck } from "../../../firebase/removeDeck";

// CSS
import './home.css'

export function Home() {
    const [myDeck, setMyDeck] = useState([]);
    const [id, setId] = useState('');

    useEffect(() => {
        let credential = localStorage.getItem('id');
        setId(credential);
        getDocument(id, setMyDeck);
    }, [id]);

    let deckElements = myDeck.map(item => (
         <div className="my-deck" key={item.id}>
            <p className="deck-name"> 
                {item.deckName}
            </p>
            
            <div className="container-deck-buttons">
                <Link to={`/home/createcard/${item.deckName}/${item.id}`} className="link"> 
                    <UniversalButton 
                        bg='#00A400' 
                        width='100%' 
                        value='add' 
                        padding='0.3rem'
                        onClick={() => add(item.id)}  
                        />
                </Link>

                <Link to={`/home/review/${item.deckName}/${item.id}`} className="link">
                    <UniversalButton 
                        bg='#485BFF' 
                        width='100%' 
                        value='review'
                        padding='0.3rem'    
                        />
                </Link>

                <Link>
                    <UniversalButton 
                        bg='#FF2727' 
                        width='100%' 
                        value='delete'
                        padding='0.3rem' 
                        click={() => removeDeck(item.id)}   
                        />
                </Link>
            </div>
        </div> 
    ))

    return (
        <section className="section-home">
            { myDeck.length > 0 ? (
                <div className="container-deck">
                    {deckElements}
                </div>
            ):( <Link to='/createnewdeck'>
                    <h2 className="container-home">create new deck</h2>
                </Link>
            )} 
        </section>
    )
}