import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const tsLinkElement = screen.getByText(/Typescript entry point/i);
  expect(tsLinkElement).toBeInTheDocument();

  const jsLinkElement = screen.getByText(/Javascript entry point/i);
  expect(jsLinkElement).toBeInTheDocument();
});
