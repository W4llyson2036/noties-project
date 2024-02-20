import React, { useState } from "react"
import { UniversalButton } from "../../components/UniversalButton/UniversalButton"
import { Link, Navigate } from "react-router-dom"

// Firebase
import { doLogin } from "../../firebase/auth/login"

// CSS
import './login.css'
import '../../variables.css'

export function Login() {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(false);

    function handleLoginInput(ev) {
        let { name, value } = ev.target;

        setLogin(obj => ({...obj, [name]: value}));
    }

    return (
        <>
            {isLoggedIn ? (<Navigate to='/home' replace={true}/>)
            :
            (<section className="section-login">
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

                    <UniversalButton 
                        value="Log in"
                        width='100%'
                        padding="1rem"
                        bg="#00A400"  
                        click={() => doLogin(login.email, login.password, setIsLoggedIn, setLoginError)}  
                        />
                        
                    <div className="login-message-erro">
                        {loginError && <p>Invalid email or password.</p>}
                    </div>

                    <Link to='/creatnewaccount' className="btn-create-new-account">
                        Create new account
                    </Link>
                </main>
            </section>
            )}
        </>
    )
}