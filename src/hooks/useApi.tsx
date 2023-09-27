import { useCallback } from 'react';
import { useLoaderContext } from '../contexts/loaderContext';
import { getDeeps } from '../Apis/deepsApis';
import { useDeepContext } from '../contexts/deepContext';

const useApis = () => {
  const { setIsLoading } = useLoaderContext();
  const { setDeeps } = useDeepContext();

  const getAllDeeps = useCallback(async () => {
    setIsLoading(true);

    await new Promise((r) => setTimeout(r, 500));
    const deeps = await Promise.resolve(getDeeps());

    setDeeps(deeps);
    setIsLoading(false);
  }, [setDeeps, setIsLoading]);

  return { getAllDeeps };
};

export default useApis;
