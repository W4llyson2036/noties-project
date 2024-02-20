import React, { useState } from "react";
import { Link } from 'react-router-dom';

// Component
import { UniversalButton } from "../../components/UniversalButton/UniversalButton";

// Firebase
import { createAccount } from "../../firebase/auth/createAccount";

// CSS
import '../../variables.css';
import './createNewAccount.css';

export function CreateNewAccount() {
    const [newAccount, setNewAccount] = useState({
        email: '',
        password: '',
    });

    const [createAccountMessage, setCreateAccountMessage] = useState({
        message: 'account was created',
        error: false,
        success: false
    });

    function handleNewAccountInput(ev) {
        let { name, value } = ev.target;
        setNewAccount(obj => ({...obj, [name]: value}));
    }

    return (
        <section className="section-creat-account">
            <div className="container-creat-account">
                <h2 className="h2-create-account">New Account</h2>

                <input 
                    name="email"
                    type="email" 
                    autoComplete="off"
                    placeholder="Email"
                    className="signin-input"
                    value={newAccount.email}
                    onChange={ev => handleNewAccountInput(ev)}    
                    />
            
                <input 
                    name="password"
                    type="password" 
                    autoComplete="off"
                    placeholder="Password"
                    className="signin-input"
                    value={newAccount.password}
                    onChange={ev => handleNewAccountInput(ev)}    
                    />

                <UniversalButton
                    bg="#00A400"
                    width="50%"
                    padding="1rem"
                    margin='auto'
                    value="Sign in"
                    click={() => createAccount(newAccount.email, newAccount.password, setCreateAccountMessage)}
                />

                <div className="display-message">
                    {createAccountMessage.error && 
                    <p className="msg-error">{createAccountMessage.message}</p>}
                    
                    {createAccountMessage.success && 
                    <p className="msg-success">{createAccountMessage.message}</p>}
                </div>

                <Link to='/' className="btn-back">back</Link>
            </div>
        </section>
    );
}
