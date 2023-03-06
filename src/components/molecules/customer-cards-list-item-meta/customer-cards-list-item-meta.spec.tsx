import React from 'react';
import { render, screen } from '@testing-library/react';

import CustomerCardListItemMeta from './customer-cards-list-item-meta';
import { listItemMetaLinkMock, listItemMetaTextMock } from '../../../mocks/list-item-meta';

const testId = 'li-meta';
describe('Customer Card List Item Meta', () => {
  it('should render card meta as text fine', () => {
    render(<CustomerCardListItemMeta {...listItemMetaTextMock} data-test-id="li-meta" />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Card Name' })).toBeInTheDocument();
  });
  it('should render card meta as link fine', () => {
    render(<CustomerCardListItemMeta {...listItemMetaLinkMock} data-test-id="li-meta" />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Card Name' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View' }).getAttribute('href')).toBe('http://localhost');
  });
});
