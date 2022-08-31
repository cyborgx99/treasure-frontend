import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuAppBar from 'components/appBar';
import React from 'react';
import {
  contentScrollable,
  footer,
  footerText,
  mainContainer,
  mainContent,
} from './styles';
import { PageLayoutProps } from './types';

const PageLayout = ({ children, hasFooter = true }: PageLayoutProps) => {
  const year = new Date().getFullYear();
  return (
    <Box sx={mainContainer}>
      <Box>
        <MenuAppBar />
      </Box>
      <Box sx={mainContent}>
        <Box sx={contentScrollable}>{children}</Box>
      </Box>
      {hasFooter && (
        <Box sx={footer}>
          <Typography component='p' sx={footerText}>
            © {year} Treasure Hunter. All rights reserved (Apparently)
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default PageLayout;
