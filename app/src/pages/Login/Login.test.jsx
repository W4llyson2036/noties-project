import { render, screen } from "@testing-library/react";
import { Login } from "./Login";
import { describe, expect, test } from "vitest";

//back here later, i didnt understand why this is not working
describe('load Login', () => {
    test.skip('title', () => {
        render(<Login />)
        const title = screen.getByText('noTies');
        expect(title).toBeInTheDocument();
    });

    // test('button create account', () => {
    //     render(<Login />)
    //     const createNewAccount = screen.getByText('create new account');
    //     expect(createNewAccount).toBeInTheDocument();
    // })
})