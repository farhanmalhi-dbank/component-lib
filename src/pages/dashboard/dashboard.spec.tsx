import { render, screen } from '@testing-library/react';
import { mockTokenParsed } from '../../mocks/token-parsed';
import Dashboard from './dashboard';

jest.mock('../../services/auth-service');

describe.skip('dashboard test', () => {
  it('it should render dashboard fine', async () => {
    render(<Dashboard />);

    expect(await screen.findByText(`Welcome ${mockTokenParsed.name} to Customer Profile Portal`)).toBeInTheDocument();
  });
});
