import { AccountStatus } from '../constants';

export const accountCardMock = {
  id: '6012e2c6-2261-41d0-b735-48f8749c3588',
  summaryOfAccounts: 'Checking Account',
  transactionLimit: 141568,
  balance: 500000,
  currency: 'PKR',
  statusOfTransactionLimit: AccountStatus.ACTIVE,
  accountStatus: AccountStatus.PENDING,
  accountType: 'personal',

  owners: [{ id: '123' }, { id: '456' }]
};
