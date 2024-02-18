import React from "react";

/**react-design-patterns-app - version 8.16 - ErrorBoundaries
 * - Features: 
 * 
 *     --> Building 'ErrorBoundary' class component
 * 
 * Note: by rendering 'MasterWithErrorComponent' i can see 
 * the cascade error resulting on the child component and 
 * the master component
 */

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error: ", error);
    // Prevent the error from being displayed
    // Set the state to trigger a re-render without the error
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
