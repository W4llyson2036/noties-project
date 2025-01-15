// lib
import React, { useEffect, useState }   from "react";
import { useParams, Link }              from "react-router-dom";
import { useQuery }                     from "@tanstack/react-query"; 

// Components
import { UniversalButton }              from "../../../components/UniversalButton/UniversalButton";

// Firebase
import { getCardForReview }             from "../../../firebase/accessData/getCardForReview";
import { updateDateForReviewCard }      from "../../../firebase/accessData/updateDateForReviewCard";

// CSS
import './reviewCard.css';

export function ReviewCard() {
    const params = useParams();

    const { data, isPending } = useQuery({
        queryKey: ['cardForReview'],
        queryFn: () => getCardForReview(params),
    })

    const [listOfCardsToReview, setlistOfCardsToReview] = useState([]);
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const [switchBtnColor, setSwitchBtnColor] = useState({
        btnGood: '#1F734A',
        btnBad: '#FF2727',
        btnShowAnswer: '#1F734A',
        default: '#2d2d2d'
    });

    useEffect(() => {
        if (data) { setlistOfCardsToReview(data); }
    }, [data]);

    function answer(userAnswer) {
        updateDateForReviewCard(params.id, userAnswer, listOfCardsToReview[0].id);
        setDisplayAnswer(a => !a);
        setlistOfCardsToReview(old => old.slice(1));
    }

    return (
        <section className="section-review-card">
            {listOfCardsToReview.length > 0 ? 
            (<div className="container-review-card">
                <div className="box-there-is-card-to-review">
                    <p className="deckname">{`Deck: ${params.deckname}`}</p>

                    <p className="card-text card-question">
                        {listOfCardsToReview[0].cardFront}
                    </p>

                    <div className="card-answer">
                        <pre className={`hidden-answer-${displayAnswer}`}>
                            {listOfCardsToReview[0].cardBack}
                        </pre>
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
            </div>)
            :  (<div className="deck-without-card-to-review">
                    <p>there is no card to study now, come back later!</p>
                    <Link to='/home'>
                        <UniversalButton 
                            width='100%' 
                            value='back' 
                            padding='0.5rem' 
                            bg='#FFA500'
                            />
                    </Link>
                </div>)}
        </section>
    )
}