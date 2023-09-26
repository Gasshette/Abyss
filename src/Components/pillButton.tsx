import { Box, Button, ButtonProps, CircularProgress, styled, useTheme } from '@mui/material';

interface PillButtonProps extends ButtonProps {
  isPending?: boolean;
}

const PillStyledButton = styled(Button)({
  borderRadius: '50px',
  fontWeight: '700',
});

const PillButton = (props: PillButtonProps) => {
  const theme = useTheme();
  const { isPending, children, ...rest } = props;

  return (
    <PillStyledButton {...rest}>
      <Box display="flex" alignItems="center" gap={1}>
        {children} {isPending && <CircularProgress size={theme.typography.fontSize} />}
      </Box>
    </PillStyledButton>
  );
};

export default PillButton;
