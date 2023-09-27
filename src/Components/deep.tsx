import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import { Deep as DeepModel } from '../Models/deep';
import { useDeepModalContext } from '../contexts/deepModalContext';
import { memo } from 'react';
import { Delete, MoreHoriz } from '@mui/icons-material';
import { useDeepContext } from '../contexts/deepContext';
import { remove } from '../Apis/deepsApis';

const Deep = ({ deep }: { deep: DeepModel }) => {
  const { setIsOpen, setData } = useDeepModalContext();
  const { removeDeep } = useDeepContext();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      gap={2}
      p={1}
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
      <Box width="100%">
        <Box display="flex" flexGrow={1} alignItems="start">
          <Box>
            <Box display="inline-block" fontWeight={700}>
              {deep.account?.name}
            </Box>{' '}
            <Typography variant="subtitle2" color="var(--mui-palette-grey-500)" sx={{ display: 'inline-block' }}>
              {deep.account?.identifier} - {deep.date.toString()}
            </Typography>
          </Box>
          <IconButton
            disableRipple
            size="small"
            onClick={async (e) => {
              e.preventDefault();
              e.stopPropagation();
              await remove(deep.id as number);
              removeDeep(deep.id as number);
            }}
            sx={{
              position: 'relative',
              p: 2,
              marginTop: `-${theme.spacing(0.5)}`, // (half the size of the padding set on the first box of the component)
              marginLeft: 'auto',
              ':hover': {
                color: 'var(--mui-palette-error-light)',
                '& > .moreHoriz': {
                  transition: 'opacity .3s',
                  opacity: 0,
                },
                '& > .delete': {
                  transition: 'opacity .3s',
                  opacity: 1,
                },
              },
            }}
          >
            <MoreHoriz fontSize="small" className="moreHoriz" sx={{ position: 'absolute' }} />
            <Delete fontSize="small" className="delete" sx={{ position: 'absolute', opacity: 0 }} />
          </IconButton>
        </Box>
        {deep.text}
      </Box>
    </Box>
  );
};

export default memo(Deep);
