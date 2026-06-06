"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`ErrorBoundary caught an error in ${this.props.name || "component"}:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-dark/50 p-6 text-center select-none relative overflow-hidden">
          {/* Glowing Orb in background */}
          <div className="absolute w-[200px] h-[200px] rounded-full bg-primary/20 filter blur-[40px] animate-pulse pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Premium animation icon */}
            <div className="w-16 h-16 rounded-full border border-accent/20 bg-accent-muted/20 flex items-center justify-center mb-4 animate-bounce">
              <span className="text-xl">✨</span>
            </div>
            <h4 className="text-lg font-bold font-display text-white mb-2">
              Visualizing System Sync...
            </h4>
            <p className="text-xs text-white/50 max-w-xs leading-normal">
              Our spatial systems are recalibrating. Standard biofeedback mode is active.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
