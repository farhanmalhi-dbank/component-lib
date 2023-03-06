import React, { useEffect, useState } from 'react';

import { Tooltip, Typography } from 'antd';
import Avatar from '../../components/atoms/avatar/avatar';
import Icon from '../../components/atoms/icon/icon';
const { Text } = Typography;

const Right = () => {
  return (
    <div className="dtools-header-right">
      <Avatar>
        <Text>T</Text>
      </Avatar>
      <Text className="title" ellipsis={{ tooltip: 'Temporary' }}>
        Temporary
      </Text>
      <div>
        <Tooltip placement="bottomRight" title="Logout" key="logout">
          <Icon name="logout-outlined" />
        </Tooltip>
      </div>
    </div>
  );
};

export default Right;
