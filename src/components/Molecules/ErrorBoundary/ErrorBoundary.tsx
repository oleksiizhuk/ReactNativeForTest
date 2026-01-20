import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorFallback } from './ErrorFallback';

/**
 * Error Boundary - A React pattern for catching JavaScript errors in component trees
 *
 * KEY CONCEPTS:
 * 1. Error Boundaries MUST be class components (hooks don't support componentDidCatch)
 * 2. They catch errors during rendering, lifecycle methods, and constructors
 * 3. They DON'T catch: event handlers, async code, server-side rendering, errors in the boundary itself
 *
 * HOW IT WORKS:
 * - When a child component throws, React calls getDerivedStateFromError() first (render phase)
 * - Then componentDidCatch() is called (commit phase) - use this for logging
 * - The boundary renders a fallback UI instead of the crashed component tree
 */

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /**
   * Static lifecycle method called during the "render" phase
   * Used to update state so the next render shows the fallback UI
   *
   * NOTE: This is called before componentDidCatch
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  /**
   * Lifecycle method called during the "commit" phase
   * Use this for side effects like error logging
   *
   * @param error - The error that was thrown
   * @param errorInfo - Contains componentStack showing which component threw
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log to console in development
    if (__DEV__) {
      console.error('ErrorBoundary caught an error:', error);
      console.error('Component stack:', errorInfo.componentStack);
    }

    // Call custom error handler (e.g., send to Sentry, Crashlytics)
    this.props.onError?.(error, errorInfo);
  }

  /**
   * Reset the error boundary state to try rendering children again
   * Useful for "Try Again" functionality
   */
  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Render custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Render default fallback UI
      return (
        <ErrorFallback
          error={this.state.error}
          onReset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}