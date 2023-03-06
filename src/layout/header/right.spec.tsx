import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { mockTokenParsed } from '../../mocks/token-parsed';

import Right from './right';

jest.mock('../../services/auth-service');

describe.skip('header right component', () => {
  it('it should render right component and call logout() onclick', async () => {
    render(
      <BrowserRouter>
        <Right />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(mockTokenParsed.name)).toBeInTheDocument();
    });

    await userEvent.click(screen.getByTestId('logout-outlined'));

    expect(window.location.pathname).toBe('/login');
  });
});
