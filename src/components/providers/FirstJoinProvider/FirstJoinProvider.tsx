import {
  createContext, useContext, FC, PropsWithChildren,
} from 'react';

import useLocalStorage from '@shared/hooks/useLocalStorage';
import { StorageFields } from '@shared/constants';

export interface FirstJoinContent {
  isFirstJoin: boolean | null;
  setFirstJoin: (value: boolean) => void;
}

export const FirstJoinContext = createContext<FirstJoinContent>({
  isFirstJoin: true,
  setFirstJoin: () => {
    /**/
  },
});

export const useFirstJoinContext = () => useContext(FirstJoinContext);

export const FirstJoinProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isFirstJoin, setFirstJoin] = useLocalStorage(
    StorageFields.FIRST_JOIN,
    true,
  );

  return (
    <FirstJoinContext.Provider value={{ isFirstJoin, setFirstJoin }}>
      {children}
    </FirstJoinContext.Provider>
  );
};
