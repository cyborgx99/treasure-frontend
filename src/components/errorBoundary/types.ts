export interface ErrorBoundaryState {
  hasError: boolean;
  reloading: boolean;
}

export interface ErrorPageProps {
  reload: () => void;
}
