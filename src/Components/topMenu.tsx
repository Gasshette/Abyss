import { Box, Typography, styled } from '@mui/material';
import { NavLink, RouteObject, useMatches } from 'react-router-dom';
import { routeConfig } from '../AppWrapper/routes';

const CustomNavLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  height: '60px',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  textDecoration: 'none',
  color: theme.palette.grey[200],
  transition: 'background-color .3s',
  ':hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const isFilled = (val: any) => val !== null && val !== undefined && val !== '';

const TopMenu = () => {
  const matches = useMatches();

  const currentRouteLabel = matches.filter((match) => Boolean(match.handle?.label)).map((match) => match.handle.label);

  const getNodeByPropRecursive = (
    obj: object,
    prop: string,
    parent: object,
    shouldGetParent = false,
    resultHolder: Array<RouteObject>
  ) => {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      resultHolder.push(shouldGetParent ? parent : obj);
    } else {
      Object.entries(obj).forEach(([_, val]) => {
        if (isFilled(val) && typeof val === 'object') {
          getNodeByPropRecursive(val, prop, obj, shouldGetParent, resultHolder);
        }
      });
    }
  };

  const topMenuRoutes: Array<RouteObject> = [];
  getNodeByPropRecursive(routeConfig, 'topMenu', routeConfig, true, topMenuRoutes);

  return (
    <>
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
              {route.handle.label}
            </Typography>
          </CustomNavLink>
        ))}
      </Box>
    </>
  );
};

export default TopMenu;
