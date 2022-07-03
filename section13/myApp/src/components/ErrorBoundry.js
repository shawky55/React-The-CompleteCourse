import { Component } from 'react';

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    this.setState((prevState) => {
      return { hasError: !prevState.hasError };
    });
  }

  render() {
    if (this.state.hasError) {
      return <p>there no user</p>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
