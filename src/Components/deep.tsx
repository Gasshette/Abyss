import { Avatar, Box, Typography } from '@mui/material';
import { Deep as DeepModel } from '../Models/deep';
import { useDeepModalContext } from '../contexts/deepModalContext';
import { memo } from 'react';

const Deep = ({ deep }: { deep: DeepModel }) => {
  const { setIsOpen, setData } = useDeepModalContext();

  return (
    <Box
      display="flex"
      gap={2}
      p={2}
      borderBottom="1px solid var(--mui-palette-secondary-main)"
      sx={{
        ':hover': {
          cursor: 'pointer',
          transition: 'background .3s',
          backgroundColor: 'var(--mui-palette-secondary-dark)',
        },
      }}
      onClick={() => {
        setData(deep);
        setIsOpen(true);
      }}
    >
      <Avatar alt="Account avatar" src="https://picsum.photos/200" />
      <Box>
        <Box py={1}>
          <Box display="inline-block" fontWeight={700}>
            {deep.account?.name}
          </Box>{' '}
          <Typography variant="subtitle2" color="var(--mui-palette-grey-500)" sx={{ display: 'inline-block' }}>
            {deep.account?.identifier} - {deep.date.toString()}
          </Typography>
        </Box>
        {deep.text}
      </Box>
    </Box>
  );
};

export default memo(Deep);
