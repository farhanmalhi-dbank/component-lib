import { render, screen } from '@testing-library/react';
import FilterDrawer from './filter-drawer';

describe('filter-drawer', () => {
  it('should render fine', () => {
    render(<FilterDrawer name="transaction" open={true} setOpen={() => {}} />);
    expect(screen.getByTestId('drawer-space-test-id')).toBeInTheDocument();
    expect(screen.getByText('Sender Account #')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Input Transaction Id')).toBeInTheDocument();
    expect(screen.getByTestId('filter-drawer-show-result')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Show Results')).toBeInTheDocument();
  });
});
