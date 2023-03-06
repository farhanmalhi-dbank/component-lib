import { TRANSACTION_STATUS, TRANSACTION_STATUS_COLOR } from '../../constants';

const getTagStatusColor = (status) => {
  if (status === TRANSACTION_STATUS.SUCCESS) {
    return TRANSACTION_STATUS_COLOR.SUCCESS;
  } else {
    if (status === TRANSACTION_STATUS.FAILED) {
      return TRANSACTION_STATUS_COLOR.FAILED;
    }
    return TRANSACTION_STATUS_COLOR.PENDING;
  }
};
export default getTagStatusColor;
