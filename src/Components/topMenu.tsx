import { Box, Typography, styled } from '@mui/material';
import { NavLink, RouteObject, useMatches } from 'react-router-dom';
import { routeConfig } from '../AppWrapper/routes';
import { Helpers } from '../helpers/helpers';

const CustomNavLink = styled(NavLink)({
  display: 'flex',
  height: '60px',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  textDecoration: 'none',
  color: 'var(--mui-palette-grey-500) !important',
  transition: 'background-color .3s',
  backdropFilter: 'blur(10px)',
  ':hover': {
    backgroundColor: 'var(--mui-palette-primary-main)',
  },
});

const TopMenu = () => {
  const matches = useMatches();

  const currentRouteLabel = matches.filter((match) => Boolean(match.handle?.label)).map((match) => match.handle.label);

  const topMenuRoutes: Array<RouteObject> = [];
  Helpers.getNodeByPropRecursive(routeConfig, 'topMenu', routeConfig, true, topMenuRoutes);

  return (
    <Box position="sticky" top={0} zIndex={999} sx={{ backdropFilter: 'blur(10px)' }}>
      <Typography variant="h6" p={2} sx={{ fontWeight: 700 }}>
        {currentRouteLabel[currentRouteLabel.length - 1]}
      </Typography>
      <Box display="flex" borderBottom={`1px solid var(--mui-palette-secondary-main)`}>
        {topMenuRoutes.map((route: RouteObject) => (
          <CustomNavLink
            key={route.path}
            to={route.path as string}
            className={(isActive) => (isActive ? 'active' : '')}
          >
            <Typography height="100%" display="flex" alignItems="center" borderBottom="3px solid transparent">
              <span>{route.handle.label}</span>
            </Typography>
          </CustomNavLink>
        ))}
      </Box>
    </Box>
  );
};

export default TopMenu;
