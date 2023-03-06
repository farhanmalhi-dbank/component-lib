import Col from '../../atoms/col/col';
import Drawer from '../../atoms/drawer/drawer';
import Row from '../../atoms/row/row';
import Statistic from '../../atoms/statistic/statistic';
import { Transaction } from '../../../interfaces/transaction';
import { Dispatch, SetStateAction } from 'react';

interface DrawerProp {
  transaction: Transaction;
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}
const TransactionDetailDrawer: React.FC<DrawerProp> = ({ transaction, drawerOpen, setDrawerOpen }: DrawerProp) => {
  return (
    <Drawer placement="right" onClose={() => setDrawerOpen(true)} open={drawerOpen} extra={<div>Transaction Detail</div>} size="large">
      {drawerOpen && transaction && transaction.id && (
        <>
          <Row>
            <Col span={12}>
              <Statistic title={'Transaction ID'} value={transaction.id} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Statistic title="Dbank ID Sender" value={transaction?.account?.id ?? ''} />
            </Col>
            <Col span={12}>
              <Statistic title="ID Receiver" value={transaction?.recipientAccount?.id ?? ''} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Statistic title="Channel" value={transaction.channel ?? ''} />
            </Col>
            <Col span={12}>
              <Statistic title={'Medium'} value={transaction.medium ?? ''} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Statistic title={'Currency'} value={transaction.lcy ?? ''} className="stats-color-value" />
            </Col>
            <Col span={12}>
              <Statistic title={'Amount'} value={transaction.lcyAmount ?? ''} className="stats-color-value" />
            </Col>
          </Row>
        </>
      )}
    </Drawer>
  );
};
export default TransactionDetailDrawer;
