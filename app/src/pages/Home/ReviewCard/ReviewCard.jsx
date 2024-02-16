import React from "react";
import { UniversalButton } from "../../../components/UniversalButton/UniversalButton";

import './reviewCard.css'

export function ReviewCard() {
    function good() {
        console.log('good')
    }

    function bad() {
        console.log('bad')
    }

    return (
        <section className="section-review-card">
            <div className="container-review-card">
                <p className="deckname">Deck: Math</p>

                <p className="card-text card-question">
                    4 + 5 = ?
                </p>

                <div className="card-answer">
                    <p className="hidden-answer">
                        wallyson 5*lorem
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime natus voluptates quod recusandae hic libero ducimus,  What is your name? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque provident cum, officia animi hic modi? Earum quos, commodi perspiciatis facere ipsa distinctio maxime illo, sunt dolorum, incidunt quae dolorem rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequuntur omnis placeat ullam eveniet sed alias, doloribus magnam! Odit beatae molestiae earum aperiam laboriosa What is your name? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque provident cum, officia animi hic modi? Earum quos, commodi perspiciatis facere ipsa distinctio maxime illo, sunt dolorum, incidunt quae dolorem rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequuntur omnis placeat ullam eveniet sed alias, doloribus magnam! Odit beatae molestiae earum aperiam laboriosadoloremque provident delectus nam dolor corrupti, a ad, enim ullam ab! Nam, amet iste.
                    </p>
                </div>

                <div className="review-card-button">
                    <div>
                        <UniversalButton width='100%' value='good' padding='0.5rem' bg='#1F734A' 
                        click={good}/>
                    </div>

                    <div>
                        <UniversalButton width='100%' value='bad' padding='0.5rem' bg='#FF2727'
                        click={bad}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
