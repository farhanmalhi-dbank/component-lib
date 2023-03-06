import { Card } from 'antd';
import LabelValue from '../label-value/label-value';

interface SearchResultCardProps {
  list: Array<{ title: string; value: string }>;
  searchStr: Array<string>;
  onClickHandler?: () => void;
}

const SearchResultCard = ({ list, searchStr, onClickHandler }: SearchResultCardProps) => {
  return (
    <Card data-test-id="test-transaction-card" onClick={onClickHandler} hoverable={true}>
      {list.map((x) => {
        return <LabelValue key={x.title} title={x.title} value={x.value} searchText={searchStr} />;
      })}
    </Card>
  );
};

export default SearchResultCard;
