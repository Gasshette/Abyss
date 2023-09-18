import { Outlet } from 'react-router-dom';
import TopMenu from '../Components/topMenu';
import Publisher from '../Components/publisher';

const Home = () => {
  return (
    <>
      <TopMenu />
      <Publisher />
      <Outlet />
    </>
  );
};

export default Home;
