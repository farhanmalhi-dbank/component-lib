import React, { useState } from 'react';
import Button from '../../atoms/button/button';
import Drawer from '../../atoms/drawer/drawer';
import Select, { OptionProps } from '../../atoms/select/select';
import Space from '../../atoms/space/space';
import TransactionFilter, { FieldData } from '../transaction-filter/transaction-filter';

export interface SearchDrawerProp {
  name: string;
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (data: boolean) => void;
}

const FilterDrawer: React.FC<SearchDrawerProp> = ({ name, open, setOpen }: SearchDrawerProp) => {
  const options: OptionProps[] = [];
  const [, setData] = useState<FieldData[]>([]);

  const filters = {
    transaction: <TransactionFilter formData={{}} onChangeHandler={setData} />
  };
  Object.keys(filters).forEach((x) => options.push({ key: x, value: x, label: x }));
  const [activeFilter, setActiveFilter] = useState(name);
  const onClose = () => {
    setOpen(false);
  };

  const onChange = (value: string) => {
    setActiveFilter(value);
  };

  const headerContent = (
    <Space data-test-id="drawer-space-test-id">
      Filter Only By
      <Select showSearch defaultValue={activeFilter} onChange={onChange} filterOption={true} options={options} />
    </Space>
  );
  const footer = (
    <div>
      <Button data-test-id="filter-drawer-show-result" type="primary" className="filter-drawer-button" onClick={onClose}>
        Show Results
      </Button>
      <Button
        className="filter-drawer-button"
        onClick={() => {
          onClose();
        }}>
        Reset
      </Button>
    </div>
  );
  return (
    <div>
      <Drawer footer={footer} placement="right" onClose={onClose} open={open} extra={headerContent} size={'large'}>
        {filters[activeFilter]}
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
