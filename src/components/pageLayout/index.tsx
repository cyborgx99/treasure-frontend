import { Box } from '@mui/system';
import MenuAppBar from 'components/appBar';
import React from 'react';
import {
  ContentScrollable,
  Footer,
  FooterText,
  MainContainer,
  MainContent,
} from './styles';
import { PageLayoutProps } from './types';

const PageLayout = ({ children, hasFooter = true }: PageLayoutProps) => {
  const year = new Date().getFullYear();
  return (
    <MainContainer>
      <Box>
        <MenuAppBar />
      </Box>
      <MainContent>
        <ContentScrollable>{children}</ContentScrollable>
      </MainContent>
      {hasFooter && (
        <Footer>
          <FooterText>
            © {year} Treasure Hunter. All rights reserved (Apparently)
          </FooterText>
        </Footer>
      )}
    </MainContainer>
  );
};

export default PageLayout;
