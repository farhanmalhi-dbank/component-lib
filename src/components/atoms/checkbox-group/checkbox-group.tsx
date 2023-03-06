import { Checkbox } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox';

import React from 'react';

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props: CheckboxGroupProps) => <Checkbox.Group {...props} />;

export default CheckboxGroup;
