import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { UniversalButton } from "../../components/UniversalButton/UniversalButton";
import './createNewAccount.css';
import '../../variables.css';

export function CreateNewAccount() {
    const [newAccount, setNewAccount] = useState({
        email: '',
        password: ''
    });

    function signIn() {
        console.log('new Account was created')
    }

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
                    placeholder="Email"
                    className="signin-input"
                    value={newAccount.email}
                    onChange={ev => handleNewAccountInput(ev)}    
                    />
            
                <input 
                    name="password"
                    type="password" 
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
                    click={signIn}
                />
                <Link to='/'>
                    <p className="back">Back</p>
                </Link>
            </div>
        </section>
    );
}
