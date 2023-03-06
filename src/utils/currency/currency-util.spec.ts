import { currencyFormat } from './currency-util';

describe('Currency Utility', () => {
  it('should add commas correctly', () => {
    expect(currencyFormat(125)).toBe('125');
    expect(currencyFormat(12500)).toBe('12,500');
    expect(currencyFormat(125000)).toBe('125,000');
  });
});
