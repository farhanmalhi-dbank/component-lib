import React from 'react';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';

export interface AntdFormItemProps extends FormItemProps {}

const FormItem: React.FC<AntdFormItemProps> = (props: AntdFormItemProps) => {
  return <Form.Item {...props} />;
};
export default FormItem;
