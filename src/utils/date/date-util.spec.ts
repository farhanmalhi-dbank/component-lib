import { dateFormat, dateTimeFormat } from '../../constants';
import { toDateString } from './date-util';

describe('Date Utility', () => {
  it('should convert the date format successfully', () => {
    let dateObj = toDateString(new Date('2021/11/22'), dateFormat);
    expect(dateObj).toBe('22nd November 2021');
  });
  it('should convert the datetime successfully', () => {
    let dateObj = toDateString(new Date('2021/11/8 5:20 pm'), dateTimeFormat);
    expect(dateObj).toBe('08/11/21, 05:20pm');
  });
});
