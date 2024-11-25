// Components
import { FilterCards }               from './FilterCard/FilterCards';
import { SearchCard }                from './SearchCard/SearchCard';
import { CardMapper }                from './CardMapper/CardMapper';

// CSS
import './ViewCards.css';

export function ViewCards() {   
    return (
        <section className="section-view-cards">
            <div className='container-search-cards a'>
                <SearchCard />
                <FilterCards />                
            </div>

            <CardMapper />
        </section>
    );
}