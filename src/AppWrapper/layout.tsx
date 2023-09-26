import { Box, List, ListItem, ListItemButton, Typography, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SideMenu from '../Components/sideMenu';
import LoaderProvider from '../contexts/loaderContext';
import DeepModal from '../modals/deepModal';
import DeepModalProvider from '../contexts/deepModalContext';
import DeepProvider from '../contexts/deepContext';
import { useWindowSize } from '@uidotdev/usehooks';
import ProfileAvatar from '../Components/ProfilAvatar';
import PillButton from '../Components/pillButton';
import IdentityDisplayer from '../Components/identityDisplayer';

const Layout = () => {
  const theme = useTheme();
  const size = useWindowSize();

  return (
    <>
      <DeepProvider>
        <LoaderProvider>
          <DeepModalProvider>
            <DeepModal />

            <Box
              display="flex"
              alignItems="top"
              justifyContent="center"
              margin="auto"
              maxWidth="1280px"
              minHeight="100%"
              columnGap={3}
            >
              <Box maxWidth="250px" height={`${size.height}px`} py={2} position="sticky" top={0}>
                <SideMenu />
              </Box>
              <Box
                maxWidth="598px"
                minWidth="598px"
                borderLeft={`1px solid ${theme.palette.secondary.main}`}
                borderRight={`1px solid ${theme.palette.secondary.main}`}
              >
                <Outlet />
              </Box>

              {/* Who to follow */}
              <Box display="flex" flexDirection="column" flexGrow={1} py={2} gap={2}>
                <Box borderRadius={4} py={2} sx={{ backgroundColor: theme.palette.secondary.main }}>
                  <Typography variant="h5" pl={2} pb={2} fontWeight={700}>
                    Who to follow
                  </Typography>
                  <List disablePadding>
                    {new Array(3).fill('').map((_, i) => (
                      <ListItem key={i} disablePadding>
                        <ListItemButton>
                          <Box display="flex" flexGrow={1} justifyContent="space-between" alignItems="center">
                            <IdentityDisplayer />
                            <PillButton
                              size="small"
                              sx={{
                                px: 2,
                                py: 1,
                                backgroundColor: 'var(--mui-palette-grey-100)',
                                color: 'var(--mui-palette-grey-900)',
                                ':hover': {
                                  backgroundColor: 'var(--mui-palette-grey-300)',
                                },
                              }}
                            >
                              Follow
                            </PillButton>
                          </Box>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* TODO List */}
                <Box
                  borderRadius={4}
                  p={2}
                  sx={{
                    backgroundColor: 'var(--mui-palette-grey-400)',
                    color: 'var(--mui-palette-common-black)',
                  }}
                >
                  <Typography variant="h5" fontWeight={700}>
                    TODO list
                  </Typography>
                  <ul>
                    <li>
                      /POST from sideMenu : getAllDeeps not available, maybe create a context to store all the api calls
                      ? Careful about the loader
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </DeepModalProvider>
        </LoaderProvider>
      </DeepProvider>
    </>
  );
};

export default Layout;
