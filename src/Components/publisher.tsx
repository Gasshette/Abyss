import { Box, TextareaAutosize, styled } from '@mui/material';
import PillButton from './pillButton';
import ProfileAvatar from './ProfilAvatar';

const Textarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: theme.palette.secondary.main,
  borderRadius: 'none',
  outline: 'none',
  fontSize: '20px',
  resize: 'none',
}));

const Publisher = () => {
  return (
    <Box py={2} px={2} borderBottom={`1px solid var(--mui-palette-secondary-main)`}>
      <Box display="flex" gap={2}>
        <ProfileAvatar />
        <Textarea placeholder="What is happening!?" />
      </Box>
      <Box display="flex" flexGrow={1} justifyContent="flex-end">
        <PillButton size="small" variant="contained" color="info">
          Post
        </PillButton>
      </Box>
    </Box>
  );
};

export default Publisher;
