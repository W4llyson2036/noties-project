import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../variables.css'
import './nav.css'

export default function Nav() {
    const [buguerIsOpen, setBuguerIsOpen] = useState(false);

    function logout() {
        console.log("log out")
    }

    return(
        <>
            <button 
                className={`buguer ${buguerIsOpen ? 'buguer-open' : 'buguer-closed'}`}
                onClick={() => setBuguerIsOpen(old => !old)}>
            </button>
            
            <nav className='primary-nav' aria-expanded={buguerIsOpen ? 'true' : 'false'}>
                <ul className='primary-list'>
                    <NavLink 
                        to='/home'
                        // isActive its the current "path"
                        className={({isActive}) => isActive ? "item" : "item-not-select"}> 
                        <li>Decks</li>
                    </NavLink>

                    <NavLink 
                        to='/createNewdeck'
                        className={({isActive}) => isActive ? "item" : "item-not-select"}>
                        <li>Create new deck</li>
                    </NavLink>

                    <NavLink 
                        to='/About'
                        className={({isActive}) => isActive ? 'item' : "item-not-select"}>
                        <li>About</li>
                    </NavLink>
                </ul>

                <Link to='/'>
                    <button className='logout' onClick={logout}>Log out</button>
                </Link>
            </nav>
        </>
    )
}
