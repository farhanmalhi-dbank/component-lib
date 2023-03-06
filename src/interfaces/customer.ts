/* eslint-disable no-unused-vars */
import { Scalars } from './scalars';

export type Maybe<T> = T | null;

export enum Gender {
  Female = 'female',
  Male = 'male'
}
export type Customer = {
  __typename?: 'Customer';
  /** Customer's address */
  address?: Maybe<Scalars['String']>;
  /** Customer's place of birth */
  birthPlace?: Maybe<Scalars['String']>;
  /** Oath Checked */
  checkedOath?: Maybe<Scalars['String']>;
  /** Customer's city */
  city?: Maybe<Scalars['String']>;
  /** CNIC Date of Issuance */
  cnicDateOfIssuance?: Maybe<Scalars['DateTime']>;
  /** Customer's date of birth */
  dob?: Maybe<Scalars['DateTime']>;
  /** Employment Status */
  employmentStatus?: Maybe<Scalars['String']>;
  /** Customer's gender */
  gender?: Maybe<Gender>;
  /** Customer's id */
  id?: Maybe<Scalars['String']>;
  /** Customer's cnic */
  issued_id?: Maybe<Scalars['String']>;
  /** Monthly Income */
  monthlyIncome?: Maybe<Scalars['String']>;
  /** Customer's mother's maiden name */
  motherMaidenName?: Maybe<Scalars['String']>;
  /** Customer's name */
  name?: Maybe<Scalars['String']>;
  /** Customer's phone number */
  phone?: Maybe<Scalars['String']>;
  /** Customers's avatar photoUrl */
  photoUrl?: Maybe<Scalars['String']>;
  /** Read Fact Sheet */
  readFactSheet?: Maybe<Scalars['String']>;
  /** CNIC Date of Issuance */
  readTnc?: Maybe<Scalars['String']>;
  /** Customer's status */
  status?: Maybe<Scalars['Float']>;
};
