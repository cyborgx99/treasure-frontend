import React from 'react';
import { Helmet } from 'react-helmet';
import { truncateString } from 'utils/truncateString';
import { HtmlHeadTagsProps } from './types';

const HtmlHeadTags = ({ title }: HtmlHeadTagsProps) => (
  <Helmet>
    <title>
      {title
        ? `${truncateString(title, 50)} | Treasure Hunter`
        : 'Treasure Hunter'}
    </title>
  </Helmet>
);

export default HtmlHeadTags;
