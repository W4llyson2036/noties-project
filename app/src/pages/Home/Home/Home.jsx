// lib
import { useState, useEffect }  from "react";
import { useQuery }             from "@tanstack/react-query";

// Components
import { HomeButton }           from "./HomeButton/HomeButton";

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
        if (data) { setDecks(data) };
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
                                    <p className="deck-name">{item.deckName}</p>
                                    <div className="container-deck-buttons">
                                        <HomeButton 
                                            name="add"
                                            endpoint={`/home/createcard/${item.deckName}/${item.id}`}
                                            bg="green"
                                        />

                                        <HomeButton 
                                            name="reviewkkk"
                                            endpoint={`/home/review/${item.deckName}/${item.id}`}
                                            bg="blue"
                                            availableCard={item.numberOfCards}
                                        />

                                        <HomeButton 
                                            name="delete"
                                            bg='#FF2727' 
                                            setRemoveDeck={() => removeDeckFromUI(index, item.id)}   
                                        />
                                    </div>
                                </div> 
                            ))}
                        </div>
                }
        </section>
    )
}