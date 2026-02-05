import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page title', () => {
  render(<App />);
  const titleElement = screen.getByText(/We Spent the Last 3 Weeks Testing 24 Dashcams/i);
  expect(titleElement).toBeInTheDocument();
});
