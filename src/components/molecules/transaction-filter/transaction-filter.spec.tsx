import { render, screen } from '@testing-library/react';
import TransactionFilter from './transaction-filter';

//TODO: add more test cases once reset and show results are integrated
describe('transaction-filter', () => {
  it('should render fine', () => {
    const initialValue = {
      transaction_id: '2212312312'
    };
    // eslint-disable-next-line no-unused-vars
    const handler = (data) => {};
    render(<TransactionFilter formData={initialValue} onChangeHandler={handler} />);
    expect(screen.getByText('Transaction ID')).toBeInTheDocument();
    expect(screen.getByTestId('transaction-id-input')).toHaveDisplayValue(initialValue.transaction_id);
    expect(screen.getByTestId('transaction-id-input')).toBeInTheDocument();
    expect(screen.getByTestId('transaction-range-picker')).toBeInTheDocument();
    expect(screen.getByTestId('transaction-range-picker')).toHaveClass('ant-picker');
    expect(screen.getAllByRole('checkbox').length).toBe(5);
  });
});
