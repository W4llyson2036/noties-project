import React, { useState } from "react"
import { UniversalButton } from "../../components/UniversalButton/UniversalButton"
import { Link } from "react-router-dom"

import '../../variables.css'
import './login.css'

export function Login() {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    function handleLogin() {
        console.log('log in')
    }

    function handleLoginInput(ev) {
        let { name, value } = ev.target;

        setLogin(obj => ({...obj, [name]: value}));
    }

    return (
        <section className="section-login">
            <main className="login-main">
                <h1 className="login-h1">noTies</h1>

                <input 
                    name="email"
                    type="email" 
                    placeholder="Email"
                    className="login-input"
                    value={login.email}
                    onChange={ev => handleLoginInput(ev)}    
                    />
            
                <input 
                    name="password"
                    type="password" 
                    placeholder="Password"
                    className="login-input"
                    value={login.password}
                    onChange={ev => handleLoginInput(ev)}    
                    />

                <Link to='/home'>
                    <UniversalButton 
                        value="Log in"
                        width='100%'
                        padding="1rem"
                        bg="#00A400"  
                        click={handleLogin}  
                    />
                </Link>

                <Link to='/creatnewaccount'>
                    <p className="create-new-account">Create new account</p>
                </Link>
            </main>
        </section>
    )
}