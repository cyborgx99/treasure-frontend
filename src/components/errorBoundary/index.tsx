import Spinner from 'components/spinner';
import React, { ErrorInfo } from 'react';

import ErrorPage from './errorPage';
import { ErrorBoundaryState } from './types';

class ErrorBoundary extends React.Component<
  { children: JSX.Element },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, reloading: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  private readonly reload = () => {
    // Show a PageLoader to give the user instant feedback when clicking "reload"
    this.setState({ reloading: true });
    window.location.reload();
  };

  render() {
    const { children } = this.props;
    const { hasError, reloading } = this.state;

    if (reloading) {
      return <Spinner />;
    }

    return hasError ? <ErrorPage reload={this.reload} /> : children;
  }
}

export default ErrorBoundary;
