import {render, screen} from "@testing-library/react";
import JavaScriptEntryPoint from "./JavaScriptEntryPoint";

test('renders learn react link', () => {
    render(<JavaScriptEntryPoint/>);
    const linkElement = screen.getByText(/Javascript entry point/i);
    expect(linkElement).toBeInTheDocument();
});
