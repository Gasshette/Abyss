import { useState } from 'react';
import { Box, TextareaAutosize, styled } from '@mui/material';
import PillButton from './pillButton';
import ProfileAvatar from './ProfilAvatar';
import { SubmitHandler, useForm } from 'react-hook-form';
import { post, put } from '../Apis/deepsApis';
import { Deep as DeepModel } from '../Models/deep';
import { useDeepModalContext } from '../contexts/deepModalContext';
import { useDeepContext } from '../contexts/deepContext';

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

type Inputs = {
  text: string;
};

const Publisher = ({ getAllDeeps, deep }: { getAllDeeps?: () => Promise<void>; deep?: DeepModel }) => {
  const { isOpen, setIsOpen } = useDeepModalContext();
  const { editDeep } = useDeepContext();

  const [isPending, setIsPending] = useState(false);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsPending(true);

    let newDeep;

    if (deep) {
      // Edition mode
      newDeep = deep;
      newDeep.text = data.text;
      await put(newDeep);
      isOpen && setIsOpen(false);
      editDeep(newDeep);
    } else {
      // Creation mode
      newDeep = new DeepModel({ accountGuid: '3252ab78-b89a-4843-b3fc-4251bff0c417', text: data.text });
      await post(newDeep);
    }

    setIsPending(false);
    getAllDeeps && getAllDeeps();
  };

  return (
    <Box py={2} px={2} borderBottom={`1px solid var(--mui-palette-secondary-main)`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" gap={2}>
          <ProfileAvatar />
          <Textarea
            autoFocus={true}
            {...register('text')}
            placeholder="What is happening!?"
            sx={{ paddingTop: 1 }}
            defaultValue={deep?.text ?? ''}
          />
        </Box>
        <Box display="flex" flexGrow={1} justifyContent="flex-end">
          <PillButton type="submit" size="small" variant="contained" color="info" isPending={isPending}>
            {deep ? 'Edit' : 'Post'}
          </PillButton>
        </Box>
      </form>
    </Box>
  );
};

export default Publisher;
