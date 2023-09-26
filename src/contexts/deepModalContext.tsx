import { createContext, useContext, useState } from 'react';
import React from 'react';

interface DeepModalContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: object;
  setData: React.Dispatch<React.SetStateAction<object>>;
}

const DeepModalContext = createContext<DeepModalContextProps>(null!);

const DeepModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});

  return <DeepModalContext.Provider value={{ isOpen, setIsOpen, data, setData }}>{children}</DeepModalContext.Provider>;
};

export const useDeepModalContext = () => useContext(DeepModalContext);

export default DeepModalProvider;
