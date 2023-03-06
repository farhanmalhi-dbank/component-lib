import React from 'react';
import { Field, RuleGroupType } from 'react-querybuilder';
import Button from '../../atoms/button/button';
import Card from '../../atoms/card/card';
import QueryBuilder from '../../atoms/query-builder/query-builder';

export interface SearchDropDownProp {
  fields: Field[];
  query: RuleGroupType;
  // eslint-disable-next-line no-unused-vars
  onQueryChange: (query: RuleGroupType) => void;
  handleApplyFilter: () => void;
  clickHandler: () => void;
}

const SearchDropDown: React.FC<SearchDropDownProp> = ({
  fields,
  query,
  onQueryChange,
  handleApplyFilter,
  clickHandler
}: SearchDropDownProp) => (
  <Card
    actions={[
      <div className="dropdown-footer" key="actions-1">
        <Button key="apply-filter-1" onClick={handleApplyFilter}>
          Apply Filter
        </Button>
        <Button key="cancel-filter-2" onClick={clickHandler} type="ghost">
          Cancel
        </Button>
      </div>
    ]}>
    <QueryBuilder fields={fields} query={query} onQueryChange={onQueryChange} />
  </Card>
);

export default SearchDropDown;
