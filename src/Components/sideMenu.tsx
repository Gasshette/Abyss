import { Home, MoreHoriz } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import PillButton from './pillButton';
import ProfileAvatar from './ProfilAvatar';
import { Link, NavLink, RouteObject, useMatches } from 'react-router-dom';
import { routeConfig } from '../AppWrapper/routes';
import { Helpers } from '../helpers/helpers';
import { useDeepModalContext } from '../contexts/deepModalContext';
import IdentityDisplayer from './identityDisplayer';

const SideMenu = () => {
  const { setIsOpen } = useDeepModalContext();

  const sideMenuRoutes: Array<RouteObject> = [];
  Helpers.getNodeByPropRecursive(routeConfig, 'sideMenu', routeConfig, true, sideMenuRoutes);

  return (
    <Box display="flex" flexDirection="column" textAlign="left" height="100%" flexGrow={1}>
      <Typography variant="h4" paddingLeft={2}>
        A
      </Typography>

      <List>
        {sideMenuRoutes.map((m) => (
          <ListItem key={m.path} disablePadding>
            <ListItemButton
              disableGutters
              disableRipple
              component={NavLink}
              to={m.path as string}
              sx={{
                ':hover': { background: 'none' },
                ':hover > div': {
                  transition: '.3s background',
                  backgroundColor: 'var(--mui-palette-secondary-dark)',
                },
              }}
            >
              <Box display="flex" borderRadius={50} px={2} py={1} alignItems="center">
                <ListItemIcon>{m.handle.icon}</ListItemIcon>
                <ListItemText primary={m.handle.label} />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <PillButton color="info" variant="contained" size="large" onClick={() => setIsOpen(true)}>
        Post
      </PillButton>

      <PillButton
        sx={{
          maxWidth: '250px',
          marginTop: 'auto',
          justifyContent: 'space-between',
          textTransform: 'Capitalize',
          color: 'var(--mui-palette-grey-200)',
          ':hover': { backgroundColor: 'var(--mui-palette-secondary-dark)' },
        }}
      >
        <IdentityDisplayer />
        <MoreHoriz />
      </PillButton>
    </Box>
  );
};

export default SideMenu;
