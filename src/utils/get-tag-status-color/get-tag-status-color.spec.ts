import { TRANSACTION_STATUS, TRANSACTION_STATUS_COLOR } from '../../constants';
import { getTagStatusColor } from './get-tag-status-color';

describe('Tag status color', () => {
  it('should get the success color for success status', () => {
    expect(getTagStatusColor(TRANSACTION_STATUS.SUCCESS)).toBe(TRANSACTION_STATUS_COLOR.SUCCESS);
  });
  it('should get the success color for failed status', () => {
    expect(getTagStatusColor(TRANSACTION_STATUS.FAILED)).toBe(TRANSACTION_STATUS_COLOR.FAILED);
  });
  it('should get the success color for pending status', () => {
    expect(getTagStatusColor(TRANSACTION_STATUS.PENDING)).toBe(TRANSACTION_STATUS_COLOR.PENDING);
  });
});
