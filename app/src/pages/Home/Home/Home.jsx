import React, { useState } from "react";
import { Link } from "react-router-dom"
import { UniversalButton } from "../../../components/UniversalButton/UniversalButton";

import './home.css'

export function Home(){
    const [myDeck, setMyDeck] = useState(
        // ['english', 'math','english', 'math','english', 'math', 'english', 'math' ,'english', 'math', 'english', 'math','english', 'math','english']
        // ['skaks dddddddddd xccccccccc xxxxxxxxx ssssssx zzzzzzzz hehhehe ', 'math kkkkkkk kkkkkkkkk kkkkkkkkkk kkkkkkkkk kkkkkkkk kkkkk']
        // [45, 45, 45]
        []
        );

    let deckElements = myDeck.map(item => (
         <div className="my-deck">
            <p className="deck-name"> 
                {item}
            </p>
            
            <div className="container-deck-buttons">
                <Link to='/home/createcard' className="link"> 
                    <UniversalButton bg='#00A400' width='100%' value='add' padding='0.3rem'  />
                </Link>

                <Link to='/home/review' className="link">
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