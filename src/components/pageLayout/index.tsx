import { Box } from '@mui/system';
import MenuAppBar from 'components/appBar';
import ErrorBoundary from 'components/errorBoundary';
import React from 'react';
import HtmlHeadTags from './htmlHeadTags';
import {
  ContentScrollable,
  Footer,
  FooterText,
  MainContainer,
  MainContent,
} from './styles';
import { PageLayoutProps } from './types';

const PageLayout = ({ children, hasFooter = true, title }: PageLayoutProps) => {
  const year = new Date().getFullYear();
  return (
    <>
      <HtmlHeadTags title={title} />
      <ErrorBoundary>
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
      </ErrorBoundary>
    </>
  );
};

export default PageLayout;
