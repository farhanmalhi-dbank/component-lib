import { render, screen, waitFor } from '@testing-library/react';
import App from './app';

test('renders login page', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText(/Sign in using Google/i)).toBeInTheDocument();
  });
});
