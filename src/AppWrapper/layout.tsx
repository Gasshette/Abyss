import { Box, Typography, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SideMenu from '../Components/sideMenu';

const Layout = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        display="flex"
        alignItems="top"
        justifyContent="center"
        margin="auto"
        maxWidth="1280px"
        minHeight="100%"
        columnGap={3}
      >
        <Box maxWidth={'250px'} display="flex" flexGrow={1} py={2}>
          <SideMenu />
        </Box>
        <Box
          width="598px"
          borderLeft={`1px solid ${theme.palette.secondary.main}`}
          borderRight={`1px solid ${theme.palette.secondary.main}`}
        >
          <Outlet />
        </Box>
        <Box display="flex" flexDirection="column" flexGrow={1} py={2}>
          <Box borderRadius={4} sx={{ backgroundColor: theme.palette.secondary.main }}>
            <Typography variant="h5" p={2}>
              Who to follow
            </Typography>
            <ul>
              <li>follow 1</li>
              <li>follow 2</li>
              <li>follow 3</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
