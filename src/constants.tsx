/* eslint-disable no-unused-vars */
export const TRANSACTION_STATUS = {
  SUCCESS: 'Successful',
  FAILED: 'Unsuccessful',
  PENDING: 'Pending'
};
export const TRANSACTION_STATUS_COLOR = {
  SUCCESS: 'green',
  FAILED: 'red',
  PENDING: 'yellow'
};
export const dateFormat = 'Do MMMM YYYY';
export const dateTimeFormat = 'DD/MM/YY, hh:mma';

export enum AccountStatus {
  UNSPECIFIED_STATUS = 0,
  PENDING = 1,
  ACTIVE = 2,
  SUSPENDED = 3,
  CLOSED = 4,
  CREATED = 5,
  UNRECOGNIZED = -1
}

export enum CustomerStatus {
  CREATED = 0,
  ACTIVE = 1,
  INACTIVE = 2,
  UNRECOGNIZED = -1
}

export const CustomerStatusOptions = [
  { key: 0, value: 0, label: 'Status: CREATED' },
  { key: 1, value: 1, label: 'Status: ACTIVE' },
  { key: 2, value: 2, label: 'Status: INACTIVE' },
  { key: 3, value: 3, label: 'Status: UNRECOGNIZED' }
];

export const GQL_ERR_MSG_UNAUTHORIZED = 'Unauthorized';
