import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TriplePlay UI Components', () => {
  render(<App />);
  const headingElement = screen.getByText(/TriplePlay UI Components/i);
  expect(headingElement).toBeInTheDocument();
});
