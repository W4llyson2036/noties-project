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
    const [listOfCardsToReview, setlistOfCardsToReview] = useState('');
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const [switchBtnColor, setSwitchBtnColor] = useState({
        btnGood: '#1F734A',
        btnBad: '#FF2727',
        btnShowAnswer: '#1F734A',
        default: '#2d2d2d'
    });

    useEffect(() => {
        async function fetchData() {
            const cards = await getCardForReview(params);
            setlistOfCardsToReview(cards);
        }
        fetchData();
    }, []);

    function answer(userAnswer) {
        updateDateForReviewCard(params.id, userAnswer, listOfCardsToReview[0].id);
        setDisplayAnswer(a => !a);
        setlistOfCardsToReview(old => old.slice(1));
    }

    return (
        <section className="section-review-card">
            <div className="container-review-card">
                <p className="deckname">{`Deck: ${params.deckname}`}</p>

                <p className="card-text card-question">
                    {listOfCardsToReview.length > 0 ? listOfCardsToReview[0].cardFront : null}
                </p>

                <div className="card-answer">
                    <p className={`hidden-answer-${displayAnswer}`}>
                        {listOfCardsToReview.length > 0 ? listOfCardsToReview[0].cardBack : null}
                    </p>
                </div>

                <div className="box-review-card-button">
                    <UniversalButton 
                        width='100%' 
                        value='good' 
                        padding='0.5rem' 
                        bg={displayAnswer ? switchBtnColor.btnGood : switchBtnColor.default} 
                        click={() => displayAnswer ? answer('good') : null} 
                    />

                    <UniversalButton 
                        width='100%' 
                        value='bad' 
                        padding='0.5rem' 
                        bg={displayAnswer ? switchBtnColor.btnBad : switchBtnColor.default}
                        click={() => displayAnswer ? answer('bad') : null} 
                    />

                    <div className="btn-show-answer">
                        <UniversalButton 
                            width='100%' 
                            value='show answer' 
                            padding='0.5rem' 
                            bg={displayAnswer ? switchBtnColor.default : switchBtnColor.btnShowAnswer}
                            click={() => setDisplayAnswer(isTrue => !isTrue)}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
