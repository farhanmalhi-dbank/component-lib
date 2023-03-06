/* eslint-disable no-unused-vars */
import { Account } from './account';
import { Scalars } from './scalars';

export type Maybe<T> = T | null;

export enum TransactionChannel {
  Atm = 'ATM',
  Ibft = 'IBFT',
  Pos = 'POS'
}

export enum TransactionMedium {
  App = 'App',
  Card = 'Card'
}

export enum TransactionStatus {
  InProcess = 'InProcess',
  InReview = 'InReview',
  Successful = 'Successful',
  Unsuccessful = 'Unsuccessful'
}

export type Transaction = {
  __typename?: 'Transaction';
  /** Sender Account */
  account?: Maybe<Account>;
  /** Account Currency */
  acy?: Maybe<Scalars['String']>;
  /** ACY amount */
  acyAmount?: Maybe<Scalars['Float']>;
  /** Channels */
  channel?: Maybe<TransactionChannel>;
  /** Completion Date */
  completionDate?: Maybe<Scalars['DateTime']>;
  /** Transaction Id */
  id?: Maybe<Scalars['String']>;
  /** Initiation Date */
  initiationDate?: Maybe<Scalars['DateTime']>;
  /** Is debit transaction */
  isDebitEntry?: Scalars['Boolean'];
  /** Local Currency */
  lcy?: Maybe<Scalars['String']>;
  /** LCY amount */
  lcyAmount?: Maybe<Scalars['Float']>;
  /** Mediums */
  medium?: Maybe<TransactionMedium>;
  /** Conversion Rate */
  rate?: Maybe<Scalars['Float']>;
  /** Recipient Account */
  recipientAccount?: Maybe<Account>;
  /** Transaction Status */
  status?: Maybe<TransactionStatus>;
};
