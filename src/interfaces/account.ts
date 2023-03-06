import { Customer } from './customer';
import { Scalars } from './scalars';

export type Maybe<T> = T | null;

export type Attribute = {
  __typename?: 'Attribute';
  code: Scalars['String'];
  name: Scalars['String'];
};
export type Account = {
  __typename?: 'Account';
  /** Account level */
  accountLevel?: Maybe<Attribute>;
  /** Account's status */
  accountStatus?: Maybe<Scalars['String']>;
  /** Account's type */
  accountType?: Maybe<Scalars['String']>;
  /** Balance */
  balance?: Maybe<Scalars['Float']>;
  /** Currency */
  currency?: Maybe<Scalars['String']>;
  /** Account Id */
  id?: Maybe<Scalars['String']>;
  /** Owners */
  owners?: Maybe<Array<Customer>>;
  /** Transaction limit's status */
  statusOfTransactionLimit?: Maybe<Scalars['Float']>;
  /** Summary of accounts */
  summaryOfAccounts?: Maybe<Scalars['String']>;
  /** Transaction limit for account */
  transactionLimit?: Maybe<Scalars['Float']>;
};
