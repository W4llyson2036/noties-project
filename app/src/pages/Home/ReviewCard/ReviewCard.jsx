import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import { UniversalButton } from "../../../components/UniversalButton/UniversalButton";

// Firebase
import { getCardForReview } from "../../../firebase/accessData/getCardForReview";
import { updateDateForReviewCard } from "../../../firebase/accessData/updateDateForReviewCard";

// CSS
import './reviewCard.css';

export function ReviewCard() {
    const params = useParams();
    const [cardsReview, setCardsReview] = useState('');
    const [displayAnswer, setDisplayAnswer] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const cards = await getCardForReview(params);
            setCardsReview(cards);
        }
        fetchData();
    }, [params]);

    function answer(userAnswer) {
        setDisplayAnswer(old => !old);
        updateDateForReviewCard(params.id, userAnswer, cardsReview[0].id);
    }

    return (
        <section className="section-review-card">
            <div className="container-review-card">
                <p className="deckname">{`Deck: ${params.deckname}`}</p>

                <p className="card-text card-question">
                    {cardsReview.length > 0 ? cardsReview[0].cardFront : null}
                </p>

                <div className="card-answer">
                    <p className={`hidden-answer-${displayAnswer}`}>
                        {cardsReview.length > 0 ? cardsReview[0].cardBack : null}
                    </p>
                </div>

                <div className="review-card-button">
                    <div>
                        <UniversalButton width='100%' value='good' padding='0.5rem' bg='#1F734A' 
                        click={() => answer('good')}/>
                    </div>

                    <div>
                        <UniversalButton width='100%' value='bad' padding='0.5rem' bg='#FF2727'
                        click={() => answer('bad')}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
