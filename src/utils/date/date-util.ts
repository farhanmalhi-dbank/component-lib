import dayjs, { Dayjs } from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(AdvancedFormat); // use plugin

export const formatDate = (date: string): Dayjs => {
  return dayjs(date);
};

export const toDateString = (date: Date, format: string): string => {
  return dayjs(date).format(format);
};

type DateType = Dayjs;

export type { DateType };
