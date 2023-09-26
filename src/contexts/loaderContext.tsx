import React, { createContext, useContext, useState } from 'react';

interface ILoaderContext {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoaderContext = createContext<ILoaderContext>(null!);

const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return <LoaderContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoaderContext.Provider>;
};

export const useLoaderContext = () => useContext<ILoaderContext>(LoaderContext);

export default LoaderProvider;
