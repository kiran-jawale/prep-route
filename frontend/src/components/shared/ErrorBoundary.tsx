

/**
 * Error Boundary Component
 *
 * React class component used to catch rendering errors
 * occurring anywhere inside its child component tree.
 *
 * Props:
 * @param children Wrapped application content.
 *
 * Purpose:
 * Prevents full application crashes by displaying a fallback UI.
 */


import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.error("[React Error Boundary]", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">Something went wrong</h1>

          <button
            onClick={() => window.location.reload()}
            className="
              rounded-xl
              bg-[#6475F7]
              px-5
              py-3
              text-white
            "
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
