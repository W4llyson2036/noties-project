import { render, screen }   from "@testing-library/react";
import { test }             from "vitest"; 
import { BrowserRouter }    from "react-router-dom";

// component
import { About }            from './About';

render(
    <BrowserRouter>
        <About />
    </BrowserRouter>
)

test("Abount menssagem is on the screen", () => {
    const text = screen.getByText(/O "noties" é um aplicativo de revisão espaçada projetado para auxiliá-lo na retenção de informações de forma eficaz\./i);
    
    expect(text).toBeInTheDocument();
})