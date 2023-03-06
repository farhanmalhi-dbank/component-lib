import React from 'react';

import PageHeader from '../../components/atoms/page-header/page-header';
import Card from '../../components/atoms/card/card';

const Dashboard = () => {
  return (
    <Card className="page-content">
      <PageHeader title={`Welcome User to Customer Profile Portal`} />
    </Card>
  );
};

export default Dashboard;
