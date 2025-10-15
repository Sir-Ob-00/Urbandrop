import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // You could also log to an external service here
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 p-6">
          <div className="max-w-3xl bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-red-600 mb-2">Something went wrong</h2>
            <pre className="text-sm text-gray-800 whitespace-pre-wrap max-h-64 overflow-auto">{String(this.state.error && this.state.error.toString())}</pre>
            {this.state.info && (
              <details className="mt-4 text-xs text-gray-600">
                <summary>Component stack</summary>
                <pre className="whitespace-pre-wrap">{this.state.info.componentStack}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
