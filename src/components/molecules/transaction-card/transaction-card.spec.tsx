import { render, screen } from '@testing-library/react';
import TransactionCard from './transaction-card';

const TransactionCardTestID = 'test-transaction-card';
const mockData = {
  name: 'CASH WITHDRAW',
  phoneNumber: '03104109309',
  accountNumber: '2312312423432123',
  searchStr: ['CASH']
};

describe('Transaction Card', () => {
  it('should render Transaction Card fine', () => {
    render(<TransactionCard {...mockData} />);
    expect(screen.getByTestId(TransactionCardTestID)).toBeInTheDocument();
  });
});
