import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Personal Task Manager heading', () => {
  render(<App />);
  const heading = screen.getByText(/personal task manager/i);
  expect(heading).toBeInTheDocument();
});
