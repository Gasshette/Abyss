import { Box, Modal } from '@mui/material';
import { useDeepModalContext } from '../contexts/deepModalContext';
import Publisher from '../Components/publisher';
import { Deep } from '../Models/deep';

const DeepModal = () => {
  const { isOpen, setIsOpen, data, setData } = useDeepModalContext();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'var(--mui-palette-primary-dark)',
    border: '1px solid var(--mui-palette-secondary-main)',
    boxShadow: 24,
    p: 0,
    '& > div': { border: '1px solid ' },
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setData({});
        setIsOpen(false);
      }}
      sx={{ overflow: 'auto' }}
    >
      <Box sx={style}>
        <Publisher deep={data as Deep} />
      </Box>
    </Modal>
  );
};

export default DeepModal;
