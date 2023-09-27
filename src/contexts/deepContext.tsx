import { createContext, useContext, useState } from 'react';
import React from 'react';
import { Deep } from '../Models/deep';

interface DeepContextProps {
  deeps: Array<Deep>;
  setDeeps: React.Dispatch<React.SetStateAction<Array<Deep>>>;
  editDeep: (editedDeep: Deep) => void;
  removeDeep: (id: number) => void;
}

const DeepContext = createContext<DeepContextProps>(null!);

const DeepProvider = ({ children }: { children: React.ReactNode }) => {
  const [deeps, setDeeps] = useState<Array<Deep>>([]);

  const editDeep = (editedDeep: Deep) => {
    const newDeeps = [...deeps];
    const matchingDeepIndex = newDeeps.findIndex((d) => d.guid === editedDeep.guid);

    if (matchingDeepIndex) {
      newDeeps[matchingDeepIndex] = editedDeep;
      setDeeps(newDeeps);
    }
  };

  const removeDeep = (id: number) => {
    const newDeeps = [...deeps];
    setDeeps(newDeeps.filter((d) => d.id !== id));
  };

  return <DeepContext.Provider value={{ deeps, setDeeps, editDeep, removeDeep }}>{children}</DeepContext.Provider>;
};

export const useDeepContext = () => useContext(DeepContext);

export default DeepProvider;
