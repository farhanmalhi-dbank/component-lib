import React from 'react';
import Icon from '../../components/atoms/icon/icon';
import t from '../../utils/translation/t';

type PageProps = {
  collapseHandler: Function;
  collapsed: boolean;
};

const Left = ({ collapsed, collapseHandler }: PageProps) => {
  return (
    <div className="dtools-header-left">
      {collapsed ? (
        <>
          <Icon name="double-right-filled" clickHandler={() => collapseHandler(!collapsed)} />
          <p>{t('header.expandMenu')}</p>
        </>
      ) : (
        <>
          <Icon name="double-left-filled" clickHandler={() => collapseHandler(!collapsed)} />
          <p>{t('header.collapseMenu')}</p>
        </>
      )}
    </div>
  );
};

export default Left;
