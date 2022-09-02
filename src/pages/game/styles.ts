import { Container } from '@mui/material';
import { Box, styled } from '@mui/system';

export const TileComponentContainer = styled(Box)({
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: '18%',
});

export const GameMainContainer = styled(Container)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: ' center',
  flexDirection: 'column',
});

export const BottomContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  padding: 1,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
});
