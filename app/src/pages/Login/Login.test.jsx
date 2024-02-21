import { render, screen } from "@testing-library/react";
import { Login } from "./Login";
import { beforeEach, describe, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe('load Login', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
            <Login />
        </BrowserRouter>
        );
    });

    it('render title', () => {
        const title = screen.getByText('noTies')
        expect(title).toBeInTheDocument();
    });

    it('render inputs', () => {
        const gmailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');

        expect(gmailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    it('render button create account', () => {
        const createNewAccount = screen.getByText('Create new account');
        expect(createNewAccount).toBeInTheDocument();
    });

    it('render text create new account', () => {
        const createNewAccountBtn = screen.getByText('Create new account');
        expect(createNewAccountBtn).toBeInTheDocument();
    });
});