// lib
import { Link }                 from "react-router-dom";
import { useState, useEffect }  from "react";
import { useQuery }             from "@tanstack/react-query";

// Components
import { UniversalButton }      from "../../../components/UniversalButton/UniversalButton";

// Firebase
import { removeDeck }           from "../../../firebase/removeDeck";

// hooks
import { getDocument }          from "../../../firebase/accessData/getDocCurrentUser";

// CSS
import './home.css';

export function Home() {
    const [decks, setDecks] = useState([]);
    const { data, isPending, refetch } = useQuery({
        queryFn: getDocument,
        queryKey: ['decksNames'],
        staleTime: 2000,
    })

    useEffect(() => {
        if (data) {
            setDecks(data); 
        }
    }, [data]);   

    // if (data.length == 0) {
    //     return (
    //         <section className="section-home">
    //             <Link to='/createnewdeck'>
    //             <h2 className="container-home">create new deck</h2>
    //             </Link>   
    //         </section>
    //     )
    // }

    function removeDeckFromUI(index, deckID) {
        let a = [...decks];
        a.splice(index, 1);
        setDecks(a);
        refetch()
        removeDeck(deckID);
    }

    return (
        <section className="section-home">
                {isPending 
                    ?   <p>AWAIT A MOMENT!!!</p> 
                    :   <div className="container-deck">
                        {decks.map((item, index) => (
                            <div className="my-deck" key={index}>
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
                                            totalCardAvailable={item.numberOfCards}  
                                            />
                                    </Link>
                
                                    <Link>
                                        <UniversalButton 
                                            bg='#FF2727' 
                                            width='100%' 
                                            value='delete'
                                            padding='0.3rem' 
                                            click={() => removeDeckFromUI(index, item.id)}   
                                            />
                                    </Link>
                                </div>
                            </div> 
                        ))}
                    </div>
                }
        </section>
    )
}