import { Avatar as AntdAvatar, AvatarProps as AntdAvatarProps } from 'antd';
import React from 'react';

const Avatar: React.FC<AntdAvatarProps> = (props: AntdAvatarProps) => <AntdAvatar {...props} />;

export default Avatar;
