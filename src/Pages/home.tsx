import { useCallback, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopMenu from '../Components/topMenu';
import Publisher from '../Components/publisher';
import { getDeeps } from '../Apis/deepsApis';
import Deep from '../Components/deep';
import { Box, CircularProgress } from '@mui/material';
import { useLoaderContext } from '../contexts/loaderContext';
import { useDeepContext } from '../contexts/deepContext';

const Home = () => {
  const location = useLocation();
  const { deeps, setDeeps } = useDeepContext();
  const { isLoading, setIsLoading } = useLoaderContext();

  const getAllDeeps = useCallback(async () => {
    setIsLoading(true);

    const deeps = await Promise.resolve(getDeeps());

    setDeeps(deeps);
    setIsLoading(false);
  }, [setDeeps, setIsLoading]);

  useEffect(() => {
    if (deeps.length <= 0) {
      getAllDeeps();
    }
  }, [getAllDeeps, setIsLoading, deeps.length]);

  return (
    <>
      <TopMenu />
      <Publisher />
      {location.pathname !== '/' ? (
        <Outlet />
      ) : isLoading ? (
        <Box display="flex" width="100%" justifyContent="center" pt={1}>
          <CircularProgress color="info" />
        </Box>
      ) : (
        deeps?.map((deep) => <Deep key={deep.guid} deep={deep} />)
      )}
    </>
  );
};

export default Home;
