import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{ backgroundColor: '#FFF9F5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
        >
          <div style={{ textAlign: 'center', maxWidth: '400px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>😵</div>
            <h1
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '14px',
                color: '#2B2B3D',
                marginBottom: '12px',
              }}
            >
              Something Went Wrong
            </h1>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '14px',
                color: '#A8A29E',
                lineHeight: '1.7',
                marginBottom: '8px',
              }}
            >
              The kitchen had a little accident. Don't worry, nothing's burned!
            </p>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '12px',
                color: '#D1CCC4',
                marginBottom: '24px',
                wordBreak: 'break-word',
              }}
            >
              {this.state.error?.message}
            </p>
            <button
              onClick={() => window.location.assign('/')}
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '10px',
                backgroundColor: '#FF7B7B',
                color: '#FFFFFF',
                border: '3px solid #2B2B3D',
                boxShadow: '4px 4px 0px #2B2B3D',
                padding: '12px 24px',
                cursor: 'pointer',
              }}
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
