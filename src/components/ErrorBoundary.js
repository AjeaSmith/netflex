import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <React.Fragment>
          <h1>something went wrong!! OH NO</h1>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </React.Fragment>
      );
    }
    return this.props.children;
  }
}
