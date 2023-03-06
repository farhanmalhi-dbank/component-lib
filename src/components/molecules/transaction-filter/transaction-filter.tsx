import Col from '../../atoms/col/col';
import { Form, FormItem } from '../../atoms/form';
import Input from '../../atoms/input/input';
import Row from '../../atoms/row/row';
import RangeSlider from '../../atoms/range-slider/range-slider';
import RangePicker from '../../atoms/range-picker/range-picker';
import CheckboxGroup from '../../atoms/checkbox-group/checkbox-group';
import { useState } from 'react';

export interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

interface FilterProps {
  formData: any;
  // eslint-disable-next-line no-unused-vars
  onChangeHandler: (data: FieldData[]) => void;
}

const TransactionFilter = ({ formData, onChangeHandler }: FilterProps) => {
  const plainOptions = ['P2P', 'Card', 'App', 'P2M', 'ATM'];
  const amountMin = 100;
  const amountMax = 100000;
  const amountUnit = 'PKR';
  let marks = {};
  marks[amountMin] = amountMin.toLocaleString() + amountUnit;
  marks[amountMax] = amountMax.toLocaleString() + amountUnit;

  const onChange = (newValue: [number, number] | null) => {
    setInputValue(newValue === null ? [0, 0] : newValue);
  };
  const onChangeForm = (fields: FieldData[]) => {
    onChangeHandler(fields);
  };

  const [inputValue, setInputValue] = useState([100, 100000]);
  return (
    <Form
      layout="vertical"
      hideRequiredMark
      initialValues={formData}
      onFieldsChange={(_, allFields) => {
        onChangeForm(allFields);
      }}>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem name="transaction_id" label="Transaction ID">
            <Input data-test-id="transaction-id-input" placeholder="Input Transaction Id" />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem name="sender_account_number" label="Sender Account #">
            <Input placeholder="Input" />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem name="receiver_account_number" label="Receiver Account #">
            <Input placeholder="Input" />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem name="dateTime" label="Date and Time">
            <RangePicker data-test-id="transaction-range-picker" getPopupContainer={(trigger) => trigger.parentElement!} />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem name="medium" label="Medium">
            <CheckboxGroup options={plainOptions} />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <FormItem label="Amount">
            <Input value={inputValue[0] + ' - ' + inputValue[1]} />
          </FormItem>
          <FormItem name="amount">
            <RangeSlider onChange={onChange} range={true} marks={marks} min={amountMin} max={amountMax} />
          </FormItem>
        </Col>
      </Row>
    </Form>
  );
};

export default TransactionFilter;
