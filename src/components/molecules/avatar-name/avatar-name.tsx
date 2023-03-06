import React from 'react';
import { Avatar, Text } from '../../atoms';

interface AvatarProps {
  name?: string;
}

const AvatarName = ({ name = '' }: AvatarProps) => {
  return (
    <div className="avatar-name" data-test-id="avatar-name-test">
      <Avatar shape="circle" size={60}>
        {name[0]}
      </Avatar>
      <Text className="user-name">{name}</Text>
    </div>
  );
};
export default AvatarName;
