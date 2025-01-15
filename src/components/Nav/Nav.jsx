// lib
import { useState }             from 'react';
import { NavLink, Link }        from 'react-router-dom';
import { useQueryClient }       from '@tanstack/react-query';


// Components
import { logout }               from '../../firebase/auth/logOut';

// CSS
import './nav.css';
import '../../variables.css';

export default function Nav() {
    const queryClient = useQueryClient();
    const [buguerIsOpen, setBuguerIsOpen] = useState(false);

    function closeBuguer() {
        setBuguerIsOpen(false);
    }

    function handleLogout() {
        logout();
        queryClient.removeQueries('allCards');
    }

    return(
        <>
            <div className={buguerIsOpen ? "overlay-nav": null}></div>
            
            <button 
                className={`buguer ${buguerIsOpen ? 'buguer-open' : 'buguer-closed'}`}
                onClick={() => setBuguerIsOpen(old => !old)}>
            </button>
            
            <nav className='primary-nav' aria-expanded={buguerIsOpen ? 'true' : 'false'}>
                <ul className='primary-list'>
                    <NavLink 
                        to='/home'
                        className={({isActive}) => isActive ? "item" : "item-not-select"}
                        onClick={closeBuguer}
                        > 
                        <li>Decks</li>
                    </NavLink>

                    <NavLink 
                        to='/createNewdeck'
                        className={({isActive}) => isActive ? "item" : "item-not-select"}
                        onClick={closeBuguer}
                        >
                        <li>Create new deck</li>
                    </NavLink>

                    <NavLink 
                        to='/About'
                        className={({isActive}) => isActive ? 'item' : "item-not-select"}
                        onClick={closeBuguer}>
                        <li>About</li>
                    </NavLink>

                    <NavLink 
                        to='/viewcards'
                        className={({isActive}) => isActive ? 'item' : "item-not-select"}
                        onClick={closeBuguer}>
                        <li>View Card</li>
                    </NavLink>
                </ul>

                <Link to='/'>
                    <button className='logout' onClick={handleLogout}>Log out</button>
                </Link>
            </nav>
        </>
    )
}