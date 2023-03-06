import { Menu, Typography } from 'antd';
import t from '../../utils/translation/t';

const { Text } = Typography;

export function AvatarMenu() {
  return (
    <Menu
      items={[
        {
          key: '1',
          onClick: () => {},
          label: <Text>{t('header.logout')}</Text>
        }
      ]}
    />
  );
}
