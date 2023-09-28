import { StorageFields } from '@shared/constants';

export const writeToLocalStorage = <T>(key: StorageFields, data: T) => {
  localStorage.setItem(String(key), JSON.stringify(data));
};

export const clearLocalStorageByKey = (key: StorageFields) => {
  localStorage.removeItem(String(key));
};

export const getFromLocalStorageByKey = <T>(key: StorageFields): T | null => {
  const data = localStorage.getItem(String(key));
  if (data) return JSON.parse(data) as T;
  return null;
};
