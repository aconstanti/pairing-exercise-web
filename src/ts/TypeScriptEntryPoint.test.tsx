import { render, screen } from "@testing-library/react";
import TypeScriptEntryPoint from "./TypeScriptEntryPoint";

test('renders learn react link', () => {
    render(<TypeScriptEntryPoint />);
    const linkElement = screen.getByText(/Typescript entry point/i);
    expect(linkElement).toBeInTheDocument();
});
