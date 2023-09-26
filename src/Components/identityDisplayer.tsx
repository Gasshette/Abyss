import ProfileAvatar from './ProfilAvatar';
import { Box, Typography } from '@mui/material';

const IdentityDisplayer = () => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <ProfileAvatar />
      <Box display="flex" flexDirection="column" textAlign="left">
        <Typography fontWeight={700}>Zero To Hero</Typography>
        <Typography color="var(--mui-palette-grey-500)">ZeroToH57532672</Typography>
      </Box>
    </Box>
  );
};

export default IdentityDisplayer;
