import { render, screen } from "@testing-library/react";
import Nav from "./Nav";
import { describe, expect, test } from "vitest";

describe('<Nav />', () => {
    test('check menu', () => {
        render(<Nav />)
        const hh = screen.getByText('nav here');
        expect(hh).toBeInTheDocument();
    })
})