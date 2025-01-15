import { fireEvent, render, screen } from "@testing-library/react";
import Nav from "./Nav";
import { BrowserRouter } from 'react-router-dom'; // Importe o BrowserRouter
import { beforeEach, describe, expect, it, test, vitest} from "vitest";

// npm run test Nav.test.jsx 

describe('check menu', () => {
    beforeEach(() => {
        render(
            <BrowserRouter> {/* Renderize o componente dentro de um BrowserRouter */}
                <Nav />
            </BrowserRouter>
        );
    })

    it('should render Nav component with correct navigation links', () => {
        // Verifique se o texto 'Decks' está presente dentro do link de navegação
        const decksLink = screen.getByRole('link', { name: 'Decks' });
        const newDeckLink = screen.getByRole('link', { name: 'Create new deck' });
        const aboutLink = screen.getByRole('link', { name: 'About' });
        
        expect(decksLink).toBeInTheDocument();
        expect(newDeckLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
    });

    it('should render the button logout', () => {
        const buttonLogout = screen.getByRole("button", { name: "Log out"})
        fireEvent.click(buttonLogout);
    });

    it('render menu icon', () => {
        const buguerButton = screen.getByRole('button', { name: '' });
        expect(buguerButton).toHaveClass('buguer-closed');

        fireEvent.click(buguerButton);
        
        expect(buguerButton).toHaveClass('buguer-open');

        fireEvent.click(buguerButton);

        expect(buguerButton).toHaveClass('buguer-closed');
    })
});