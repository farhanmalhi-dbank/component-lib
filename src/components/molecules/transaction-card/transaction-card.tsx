import { Card } from 'antd';
import LabelValue from '../label-value/label-value';

interface SearchResultCardProps {
  name: string;
  phoneNumber: string;
  accountNumber: string;
  searchStr: Array<string>;
  onClickHandler?: () => void;
}

const TransactionCard = ({ name, phoneNumber, accountNumber, searchStr, onClickHandler }: SearchResultCardProps) => {
  return (
    <Card data-test-id="test-transaction-card" onClick={onClickHandler} hoverable={true}>
      <LabelValue title="Name" value={name} searchText={searchStr} />
      <LabelValue title="Phone Number" value={phoneNumber} searchText={searchStr} />
      <LabelValue title="Account Number" value={accountNumber} searchText={searchStr} />
    </Card>
  );
};

export default TransactionCard;
