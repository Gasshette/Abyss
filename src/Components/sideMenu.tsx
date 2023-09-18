import { Home, MoreHoriz } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import PillButton from './pillButton';
import ProfileAvatar from './ProfilAvatar';

const SideMenu = () => {
  const menu = [
    {
      icon: <Home />,
      label: 'Home',
      path: 'home',
    },
    {
      icon: <Home />,
      label: 'Home',
      path: 'home2',
    },
  ];
  return (
    <Box display="flex" flexDirection="column" textAlign="left" flexGrow={1}>
      <Typography variant="h4" paddingLeft={2}>
        A
      </Typography>

      <List>
        {menu.map((m) => (
          <ListItem disablePadding key={m.path}>
            <ListItemButton
              disableGutters
              disableRipple
              sx={{
                ':hover': { background: 'none' },
                ':hover > div': {
                  transition: '.3s background',
                  backgroundColor: 'var(--mui-palette-secondary-dark)',
                },
              }}
            >
              <Box display="flex" width="fit-content" borderRadius={50} px={2} py={1} alignItems="center">
                <ListItemIcon>{m.icon}</ListItemIcon>
                <ListItemText primary={m.label} />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <PillButton color="info" variant="contained">
        Coucou
      </PillButton>

      <PillButton
        sx={{
          marginTop: 'auto',
          justifyContent: 'space-between',
          textTransform: 'Capitalize',
          color: 'var(--mui-palette-grey-200)',
          ':hover': { backgroundColor: 'var(--mui-palette-secondary-dark)' },
        }}
      >
        <ProfileAvatar />
        <Box display="flex" flexDirection="column" textAlign="left">
          <Typography>Zero To Hero</Typography>
          <Typography>ZeroToH57532672</Typography>
        </Box>
        <MoreHoriz />
      </PillButton>
    </Box>
  );
};

export default SideMenu;
