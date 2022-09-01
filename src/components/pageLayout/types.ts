export interface PageLayoutProps {
  children?: React.ReactNode;
  hasFooter?: boolean;
  title: string;
}

export interface HtmlHeadTagsProps {
  title: string | null;
  children?: React.ReactNode;
}
