import {
  clearLocalStorageByKey,
  getFromLocalStorageByKey,
  writeToLocalStorage,
} from '@services/localStorageService';
import { StorageFields } from '@shared/constants';
import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = <T>(
  key: StorageFields,
  defaultValue?: T,
): [T | null, (val: T) => void, () => void] => {
  const [data, setData] = useState<T | null>(null);
  const set = useCallback(
    (localStorageData: T) => writeToLocalStorage(key, localStorageData),
    [key],
  );

  const remove = useCallback(() => clearLocalStorageByKey(key), [key]);

  useEffect(() => {
    const currentData = getFromLocalStorageByKey<T>(key);

    if (currentData) {
      setData(currentData);
    }

    if (!currentData && defaultValue) {
      set(defaultValue);
      setData(defaultValue);
    }
  }, [key]);

  return [data, set, remove];
};

export default useLocalStorage;
