// lib
import { render, screen, fireEvent }        from "@testing-library/react"
import { BrowserRouter }                    from "react-router-dom"
import { expect, describe, beforeEach, it } from "vitest"

// component
import { ViewCards }                        from "./ViewCards";

describe('test ViewCards', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <ViewCards />
            </BrowserRouter>
        )
    })

    it('should render input search card', () => {
        const inputSearchCard = screen.getByPlaceholderText('search-card');
        expect(inputSearchCard).toBeInTheDocument();
    })

    it('should render an option with the name of all decks', () => {
        // Seleciona o <select> pelo papel de combobox
        const selectNameOfAllDecks = screen.getByRole('combobox');
        expect(selectNameOfAllDecks).toBeInTheDocument();

        // Simula a mudança de seleção
        fireEvent.change(selectNameOfAllDecks, { target:  { value: 'math' }});
        expect(selectNameOfAllDecks.value).toBe('math');
        fireEvent.change(selectNameOfAllDecks, { target:  { value: 'english' }});
        expect(selectNameOfAllDecks.value).toBe('english');
    })
})