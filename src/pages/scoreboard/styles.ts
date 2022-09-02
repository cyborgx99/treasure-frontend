import { TableRow } from '@mui/material';
import { Container, styled } from '@mui/system';

export const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  gap: 5,
  marginTop: 10,
  marginBottom: 10,
});

export const StyledTableRow = styled(TableRow)({
  '&:last-child td, &:last-child th': { border: 0 },
});
