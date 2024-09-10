// CSS
import './ViewCards.css';

export function ViewCards() {
    return (
        <section className="section-view-cards">
            <div className='container-search-cards'>
                <div>
                    <input type="text" id='search-card' placeholder='search-card'/>
                    <svg className="icon-search">
                        <use xlinkHref="/public/svg/icon-search.svg#icon-search"></use>
                    </svg>
                </div>

                <select name="deck-names" id="">
                    <option value="math">math</option>
                    <option value="english">english</option>
                </select>
            </div>

            <EditCard /> 
            <EditCard /> 
            <EditCard /> 
            <EditCard /> 
        </section>
    );
}

function EditCard() {
    return (
        <div className='card-to-be-edited'> 
            kskskkss
        </div>
    )
}