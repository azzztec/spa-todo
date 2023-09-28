import moment from 'moment';

export const getTimestampSeconds = (): number => Math.round(new Date().getTime() / 1000);

export const getProjectFormattedTimestamp = (timestamp: number): string => moment.unix(timestamp).format('MMM D hh:mm');

export const getTaskCardFormattedTimestamp = (timestamp: number): string => moment.unix(timestamp).format('DD.MM.YYYY hh:mm');
