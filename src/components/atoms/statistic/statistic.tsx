import { Statistic as AntdStatistic, StatisticProps as AntdStatisticProps } from 'antd';
import React from 'react';

const Statistic: React.FC<AntdStatisticProps> = (props: AntdStatisticProps) => <AntdStatistic {...props} />;

export default Statistic;
