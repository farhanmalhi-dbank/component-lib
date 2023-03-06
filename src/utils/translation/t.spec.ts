import t from './t';

describe('Translation', () => {
  it('should get key', () => {
    expect(t('customer')).toBe('Customer');
  });

  it('should get nested key', () => {
    expect(t('header.input.dropdown.operators.beginsWith')).toBe('begins with');
  });

  it('should not get nested key result and return key', () => {
    const key = 'header.input.operators.beginsWith';
    expect(t('header.input.operators.beginsWith')).toBe(key);
  });
});
