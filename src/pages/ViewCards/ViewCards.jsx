// lib
import { useQuery }                  from '@tanstack/react-query';
import { useEffect }                 from 'react';

// Components
import { SearchCard }                from './SearchCard/SearchCard';
import { CardMapper }                from './CardMapper/CardMapper';
import { Spinner }                   from '../../components/Spinner/Spinner';
import { SelectOption }              from '../../components/SelectOption/SelectOption';
import { DeleteCardPopup }           from './DeleteCardPopup/DeleteCardPopup';

// Zustand
import { useModalOverlay }           from '../../store/useModalOverlay';

// Firebase
import { fetchCardsFromAllDecks }    from '../../firebase/accessData/fetchCardsFromAllDecks';

// CSS
import './ViewCards.css';

export function ViewCards() {  
    const { isModalOverlay } = useModalOverlay();
    const { data, isPending } = useQuery({
        queryKey: ['allCards'], 
        queryFn: fetchCardsFromAllDecks,
        staleTime: Infinity,
        refetchOnMount: false
    })  

    return (
        <section className="section-view-cards">
            {isModalOverlay && <DeleteCardPopup />}

            <div className='container-search-cards a'>
                <SearchCard />
                <SelectOption />                
            </div>
                {isPending 
                    ? <div className='spinner-container'>
                        <Spinner width="35" height="35" center="true"/>
                      </div>
                    : <CardMapper data={data} />}
        </section>
    );
}